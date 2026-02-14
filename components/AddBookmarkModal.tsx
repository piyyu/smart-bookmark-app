'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import type { Database } from '@/lib/database.types';

type Folder = Database['public']['Tables']['folders']['Row'];

interface AddBookmarkModalProps {
  onClose: () => void;
  folders: Folder[];
  userId?: string;
  onAdd?: (bookmark: any) => void;
}

export default function AddBookmarkModal({ onClose, folders, userId, onAdd }: AddBookmarkModalProps) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [folderId, setFolderId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;

    setLoading(true);
    setError('');

    // Ensure URL has protocol
    let finalUrl = url.trim();
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = 'https://' + finalUrl;
    }

    const insertData: any = {
      title: title.trim(),
      url: finalUrl,
      user_id: userId,
    };
    if (folderId) {
      insertData.folder_id = folderId;
    }

    const { data: newBookmark, error: insertError } = await supabase
      .from('bookmarks')
      .insert(insertData)
      .select()
      .single();

    if (insertError) {
      console.error('Bookmark insert error:', insertError);
      setError(insertError.message || 'Failed to save bookmark. Please try again.');
      setLoading(false);
      return;
    }

    if (onAdd && newBookmark) {
      onAdd(newBookmark);
    }

    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#111] rounded-2xl shadow-2xl border border-landing-forest/5 dark:border-white/10 overflow-hidden animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-landing-forest/5 dark:border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-landing-primary/10 rounded-lg flex items-center justify-center">
              <span className="material-icons text-landing-primary text-lg">bookmark_add</span>
            </div>
            <h2 className="text-base font-bold tracking-tight">Add Bookmark</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-landing-forest/30 dark:text-white/30 hover:text-landing-forest/60 transition-colors rounded-md"
          >
            <span className="material-icons text-xl">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-landing-forest/50 dark:text-white/40 mb-1.5 uppercase tracking-wider">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Framer Motion Docs"
              className="w-full px-3 py-2.5 bg-landing-forest/[0.03] dark:bg-white/[0.03] border border-landing-forest/[0.06] dark:border-white/[0.06] rounded-xl text-sm outline-none focus:border-landing-primary/40 focus:ring-2 focus:ring-landing-primary/10 transition-all placeholder:text-landing-forest/25 dark:placeholder:text-white/20"
              autoFocus
              required
            />
          </div>

          {/* URL */}
          <div>
            <label className="block text-xs font-semibold text-landing-forest/50 dark:text-white/40 mb-1.5 uppercase tracking-wider">URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-3 py-2.5 bg-landing-forest/[0.03] dark:bg-white/[0.03] border border-landing-forest/[0.06] dark:border-white/[0.06] rounded-xl text-sm outline-none focus:border-landing-primary/40 focus:ring-2 focus:ring-landing-primary/10 transition-all placeholder:text-landing-forest/25 dark:placeholder:text-white/20 font-mono text-xs"
              required
            />
          </div>

          {/* Folder */}
          {folders.length > 0 && (
            <div>
              <label className="block text-xs font-semibold text-landing-forest/50 dark:text-white/40 mb-1.5 uppercase tracking-wider">Folder (optional)</label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setFolderId(null)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${folderId === null
                    ? 'border-landing-primary/30 bg-landing-primary/10 text-landing-primary'
                    : 'border-landing-forest/[0.06] dark:border-white/[0.06] text-landing-forest/50 dark:text-white/40 hover:border-landing-forest/10'
                    }`}
                >
                  None
                </button>
                {folders.map((folder) => (
                  <button
                    key={folder.id}
                    type="button"
                    onClick={() => setFolderId(folder.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${folderId === folder.id
                      ? 'border-landing-primary/30 bg-landing-primary/10 text-landing-primary'
                      : 'border-landing-forest/[0.06] dark:border-white/[0.06] text-landing-forest/50 dark:text-white/40 hover:border-landing-forest/10'
                      }`}
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: folder.color }} />
                    {folder.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <span className="material-icons text-sm">error_outline</span>
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border border-landing-forest/[0.06] dark:border-white/[0.06] text-landing-forest/60 dark:text-white/50 hover:bg-landing-forest/[0.03] dark:hover:bg-white/[0.03] transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !title.trim() || !url.trim()}
              className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-landing-primary hover:bg-landing-primary/90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-landing-primary/20"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </span>
              ) : (
                'Save Bookmark'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
