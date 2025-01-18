import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qxosixzlbtwxxavieirj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4b3NpeHpsYnR3eHhhdmllaXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjQxNTMsImV4cCI6MjAyNjAwMDE1M30.KqGRz1v-OXaPDnGf_V_nE5iFuXQXdRPRVOEZVHvPp1w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);