import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

const SUPABASE_URL = "https://zgtxpheizfaytyphdejc.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpndHhwaGVpemZheXR5cGhkZWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNzE0OTYsImV4cCI6MTk4OTg0NzQ5Nn0.1kOKAN6ZQ0nq6hG5IGktbp_Wvb_o0JaGj95YEhUKdM8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
