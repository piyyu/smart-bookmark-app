import { createClient } from '@/lib/supabase/server';
import DashboardShell from '@/components/DashboardShell';

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  const { data: bookmarks } = await supabase
    .from('bookmarks')
    .select('*')
    .order('created_at', { ascending: false });

  const foldersResult = await supabase
    .from('folders')
    .select('*')
    .order('created_at', { ascending: true });
  const folders = foldersResult.error ? [] : foldersResult.data;

  return (
    <DashboardShell
      initialBookmarks={bookmarks || []}
      initialFolders={folders || []}
      user={user}
    />
  );
}
