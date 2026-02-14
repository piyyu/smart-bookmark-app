'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { Plus, Link as LinkIcon, Type } from 'lucide-react';

export default function BookmarkForm() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      await supabase.from('bookmarks').insert({
        title,
        url,
        user_id: user.id
      });

      setTitle('');
      setUrl('');
      // Optionally trigger a refresh or toast here
    }
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-[#0A0A0A] border border-landing-forest/5 dark:border-white/10 rounded-2xl p-6 mb-8 w-full max-w-2xl mx-auto shadow-lg">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-landing-forest dark:text-white">
        <Plus className="h-5 w-5 text-landing-primary" />
        Add New Bookmark
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Type className="h-4 w-4 text-landing-forest/40 dark:text-white/40" />
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="pl-10 block w-full rounded-lg border-landing-forest/10 dark:border-white/10 bg-landing-forest/5 dark:bg-white/5 border focus:ring-2 focus:ring-landing-primary focus:border-landing-primary sm:text-sm py-2.5 text-landing-forest dark:text-white placeholder:text-landing-forest/30 dark:placeholder:text-white/30 outline-none"
              placeholder="Bookmark Title (e.g. Google)"
              required
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LinkIcon className="h-4 w-4 text-landing-forest/40 dark:text-white/40" />
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-10 block w-full rounded-lg border-landing-forest/10 dark:border-white/10 bg-landing-forest/5 dark:bg-white/5 border focus:ring-2 focus:ring-landing-primary focus:border-landing-primary sm:text-sm py-2.5 text-landing-forest dark:text-white placeholder:text-landing-forest/30 dark:placeholder:text-white/30 outline-none"
              placeholder="https://example.com"
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-lg shadow-lg shadow-landing-primary/20 text-white bg-landing-primary hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-landing-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-landing-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {loading ? 'Saving...' : 'Save Bookmark'}
          </button>
        </div>
      </form>
    </div>
  );
}
