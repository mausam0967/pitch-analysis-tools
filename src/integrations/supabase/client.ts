// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kekydhiegdtomsmgnspi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtla3lkaGllZ2R0b21zbWduc3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMjA1NDAsImV4cCI6MjA1Mjc5NjU0MH0.OUj7l6nLFi-i_a3luvvOfAhMv4zwJl3jGvlS0uShyFM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);