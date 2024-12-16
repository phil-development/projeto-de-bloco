import { SupabaseClient } from '@supabase/supabase-js';

export interface SupabaseContextProps {
  supabase: SupabaseClient;
}