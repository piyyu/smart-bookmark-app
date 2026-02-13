'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { Trash2, ExternalLink } from 'lucide-react';
import type { Database } from '@/lib/database.types';

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
    // Optimistic UI
    const previousBookmarks = [...bookmarks];
    setBookmarks(bookmarks.filter((b) => b.id !== id));

    const { error } = await supabase.from('bookmarks').delete().eq('id', id);

    if (error) {
      // Revert if error
      setBookmarks(previousBookmarks);
      alert('Error deleting bookmark');
      console.error(error);
    }
  };

  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No bookmarks yet. Add one above!</p>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {bookmarks.map((bookmark) => (
        <li key={bookmark.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{bookmark.title}</h3>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">{bookmark.url}</p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <ExternalLink className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Visit</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <button
                  onClick={() => handleDelete(bookmark.id)}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-red-500"
                >
                  <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-500" aria-hidden="true" />
                  <span className="ml-3">Delete</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
