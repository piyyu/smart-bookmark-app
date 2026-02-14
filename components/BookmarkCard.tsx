'use client';

import type { Database } from '@/lib/database.types';

type Bookmark = Database['public']['Tables']['bookmarks']['Row'];
type Folder = Database['public']['Tables']['folders']['Row'];

interface BookmarkCardProps {
  bookmark: Bookmark;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string, current: boolean) => void;
  folders: Folder[];
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return '';
  }
}

export default function BookmarkCard({ bookmark, onDelete, onToggleFavorite, folders }: BookmarkCardProps) {
  const domain = getDomain(bookmark.url);
  const folder = folders.find((f) => f.id === bookmark.folder_id);
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <div className="group bg-white dark:bg-[#111] border border-landing-forest/[0.06] dark:border-white/[0.06] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-landing-forest/[0.06] hover:-translate-y-0.5 hover:border-landing-forest/10 dark:hover:border-white/10 transition-all duration-300 flex flex-col">
      {/* Card Body */}
      <div className="p-4 flex-1">
        {/* Header: favicon + domain + actions */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={faviconUrl}
              alt=""
              className="w-4 h-4 rounded-sm flex-shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="text-[10px] font-bold text-landing-primary uppercase tracking-wider truncate">{domain}</span>
          </div>
          <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={(e) => { e.stopPropagation(); onToggleFavorite(bookmark.id, bookmark.is_favorite); }}
              className={`p-1 rounded-md transition-colors ${bookmark.is_favorite ? 'text-landing-primary' : 'text-landing-forest/30 dark:text-white/30 hover:text-landing-primary'}`}
              title={bookmark.is_favorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <span className="material-icons text-base">{bookmark.is_favorite ? 'star' : 'star_border'}</span>
            </button>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded-md text-landing-forest/30 dark:text-white/30 hover:text-landing-primary transition-colors"
              title="Open link"
            >
              <span className="material-icons text-base">open_in_new</span>
            </a>
            <button
              onClick={(e) => { e.stopPropagation(); onDelete(bookmark.id); }}
              className="p-1 rounded-md text-landing-forest/30 dark:text-white/30 hover:text-red-500 transition-colors"
              title="Delete"
            >
              <span className="material-icons text-base">delete_outline</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm leading-snug mb-1.5 text-landing-forest dark:text-white group-hover:text-landing-primary transition-colors line-clamp-2">
          {bookmark.title}
        </h3>

        {/* URL */}
        <p className="text-[11px] text-landing-forest/35 dark:text-white/30 truncate">
          {bookmark.url}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-landing-forest/[0.04] dark:border-white/[0.04] flex items-center justify-between bg-landing-forest/[0.01] dark:bg-white/[0.01]">
        <span className="text-[10px] text-landing-forest/35 dark:text-white/25 tabular-nums">
          {timeAgo(bookmark.created_at)}
        </span>
        <div className="flex items-center gap-2">
          {folder && (
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-semibold"
              style={{ backgroundColor: `${folder.color}12`, color: folder.color }}
            >
              {folder.name}
            </span>
          )}
          {bookmark.is_favorite && (
            <span className="material-icons text-landing-primary text-xs">star</span>
          )}
        </div>
      </div>
    </div>
  );
}
