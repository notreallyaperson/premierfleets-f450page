import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface InventoryUnit {
  id: string;
  title: string;
  description: string | null;
  base_truck: string | null;
  package_type: string | null;
  price: number | null;
  status: 'available' | 'sold';
  vin: string | null;
  mileage: number | null;
  year: number | null;
  image_url: string | null;
  features: string[];
  created_at: string;
  updated_at: string;
  sold_at: string | null;
}
