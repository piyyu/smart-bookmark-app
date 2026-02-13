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
    <div className="glass rounded-xl p-6 mb-8 w-full max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Plus className="h-5 w-5 text-primary" />
        Add New Bookmark
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Type className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="pl-10 block w-full rounded-lg border-input bg-background/50 border focus:ring-2 focus:ring-ring focus:border-input sm:text-sm py-2"
              placeholder="Bookmark Title (e.g. Google)"
              required
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LinkIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-10 block w-full rounded-lg border-input bg-background/50 border focus:ring-2 focus:ring-ring focus:border-input sm:text-sm py-2"
              placeholder="https://example.com"
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring disabled:opacity-50 transition-colors"
          >
            {loading ? 'Saving...' : 'Save Bookmark'}
          </button>
        </div>
      </form>
    </div>
  );
}
