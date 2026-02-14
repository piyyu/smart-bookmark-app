'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { Trash2, ExternalLink, Globe } from 'lucide-react';
import type { Database } from '@/lib/database.types';
import { motion, AnimatePresence } from 'framer-motion';

type Bookmark = Database['public']['Tables']['bookmarks']['Row'];

export default function BookmarkList({ initialBookmarks }: { initialBookmarks: Bookmark[] }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(initialBookmarks || []);
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel('realtime bookmarks')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'bookmarks',
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setBookmarks((prev) => [payload.new as Bookmark, ...prev]);
          } else if (payload.eventType === 'DELETE') {
            setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== payload.old.id));
          } else if (payload.eventType === 'UPDATE') {
            setBookmarks((prev) => prev.map((bookmark) => bookmark.id === payload.new.id ? payload.new as Bookmark : bookmark));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, setBookmarks]);

  const handleDelete = async (id: string) => {
    const previousBookmarks = [...bookmarks];
    setBookmarks(bookmarks.filter((b) => b.id !== id));

    const { error } = await supabase.from('bookmarks').delete().eq('id', id);

    if (error) {
      setBookmarks(previousBookmarks);
      console.error(error);
    }
  };

  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
      return null;
    }
  };

  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-20 bg-landing-forest/5 dark:bg-white/5 rounded-xl border border-dashed border-landing-forest/10 dark:border-white/10">
        <Globe className="mx-auto h-12 w-12 text-landing-forest/30 dark:text-white/30" />
        <h3 className="mt-2 text-lg font-semibold text-landing-forest dark:text-white">No bookmarks yet</h3>
        <p className="mt-1 text-sm text-landing-forest/50 dark:text-white/50">Get started by adding a new bookmark above.</p>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence>
        {bookmarks.map((bookmark) => (
          <motion.li
            key={bookmark.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-[#111] border border-landing-forest/5 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-lg bg-landing-forest/5 dark:bg-white/5 p-2 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getFaviconUrl(bookmark.url) || ''}
                    alt=""
                    className="h-6 w-6 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <Globe className="h-5 w-5 text-muted-foreground hidden" />
                </div>
                <button
                  onClick={() => handleDelete(bookmark.id)}
                  className="text-landing-forest/30 dark:text-white/30 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-500/10"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <h3 className="font-semibold text-lg line-clamp-1 mb-1 text-landing-forest dark:text-white group-hover:text-landing-primary transition-colors">
                {bookmark.title}
              </h3>
              <p className="text-sm text-landing-forest/50 dark:text-white/50 line-clamp-1 break-all">
                {bookmark.url}
              </p>
            </div>

            <div className="bg-landing-forest/5 dark:bg-white/5 px-5 py-3 border-t border-landing-forest/5 dark:border-white/5 flex justify-end">
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-landing-primary hover:text-landing-primary/80 flex items-center gap-1 transition-colors"
              >
                Visit Website <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
