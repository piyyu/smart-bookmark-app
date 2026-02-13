'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import AuthButton from './AuthButton';
import { LogOut, User as UserIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HeaderAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  if (loading) {
    return <div className="h-9 w-24 bg-muted animate-pulse rounded-full"></div>;
  }

  if (!user) {
    return <AuthButton className="rounded-full px-4 text-xs h-9" text="Sign In" />;
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium hidden sm:inline-block">
        {user.email?.split('@')[0]}
      </span>
      <button
        onClick={handleSignOut}
        className="flex items-center justify-center h-9 w-9 rounded-full bg-accent text-accent-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
        title="Sign Out"
      >
        <LogOut className="h-4 w-4" />
      </button>
    </div>
  );
}
