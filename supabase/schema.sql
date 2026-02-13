-- Create a table for bookmarks
create table bookmarks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users not null,
  title text not null,
  url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table bookmarks enable row level security;

-- Policy: Users can see only their own bookmarks
create policy "Users can view their own bookmarks"
on bookmarks for select
using ( auth.uid() = user_id );

-- Policy: Users can insert their own bookmarks
create policy "Users can insert their own bookmarks"
on bookmarks for insert
with check ( auth.uid() = user_id );

-- Policy: Users can delete their own bookmarks
create policy "Users can delete their own bookmarks"
on bookmarks for delete
using ( auth.uid() = user_id );

-- Policy: Users can update their own bookmarks (optional, but good practice)
create policy "Users can update their own bookmarks"
on bookmarks for update
using ( auth.uid() = user_id );
