import { createClient } from "@supabase/supabase-js"

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_KEY) {
  throw new Error('Missing Supabase URL or Anon Key environment variables');
}

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL, 
    import.meta.env.VITE_SUPABASE_KEY
);