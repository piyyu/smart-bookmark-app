-- Add is_favorite column to bookmarks (defaults to false, won't break existing rows)
ALTER TABLE bookmarks ADD COLUMN IF NOT EXISTS is_favorite BOOLEAN DEFAULT false;

-- Add folder_id column to bookmarks (nullable, so existing rows stay valid)
ALTER TABLE bookmarks ADD COLUMN IF NOT EXISTS folder_id UUID DEFAULT NULL;

-- Create folders table
CREATE TABLE IF NOT EXISTS folders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  color TEXT NOT NULL DEFAULT '#FF1B6D',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Add foreign key from bookmarks.folder_id -> folders.id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'bookmarks_folder_id_fkey'
  ) THEN
    ALTER TABLE bookmarks
      ADD CONSTRAINT bookmarks_folder_id_fkey
      FOREIGN KEY (folder_id) REFERENCES folders(id) ON DELETE SET NULL;
  END IF;
END $$;

-- RLS for folders
ALTER TABLE folders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own folders" ON folders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own folders" ON folders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own folders" ON folders
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own folders" ON folders
  FOR DELETE USING (auth.uid() = user_id);
