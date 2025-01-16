import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qxosixzlbtwxxavieirj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4b3NpeHpsYnR3eHhhdmllaXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MzgxNTMsImV4cCI6MjA1MjMxNDE1M30.I8Fs55QMd05CX6Sw2-mGnpU5SItWEfq0IOuN1FdSOYU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);