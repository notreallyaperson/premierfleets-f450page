-- Create Inventory Table for Vehicle Units
-- Run this SQL in your Supabase SQL Editor to set up the database

-- Create inventory table
CREATE TABLE IF NOT EXISTS inventory (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  base_truck text,
  package_type text,
  price integer,
  status text NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'sold')),
  vin text,
  mileage integer,
  year integer,
  image_url text,
  features jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  sold_at timestamptz
);

-- Enable RLS
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all inventory
CREATE POLICY "Anyone can view inventory"
  ON inventory
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_inventory_status ON inventory(status);
CREATE INDEX IF NOT EXISTS idx_inventory_created_at ON inventory(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inventory_sold_at ON inventory(sold_at DESC) WHERE sold_at IS NOT NULL;

-- Insert sample data (optional - remove if not needed)
INSERT INTO inventory (title, description, base_truck, package_type, price, status, year, mileage, image_url, features)
VALUES
  (
    '2026 F450 Lariat - Work Series Build',
    'Purpose-built work truck with enhanced durability and functionality. Ready for the toughest jobs with professional-grade equipment.',
    '2026 Ford F450 Lariat',
    'Work Series',
    12500000,
    'available',
    2026,
    0,
    '/IMG_1243.jpg',
    '["37\" all-terrain tires", "Heavy-duty steel bumpers", "LED light bar package", "Spray-in bedliner", "Towing package with integrated brake controller"]'
  ),
  (
    '2026 F450 King Ranch - Overland Series',
    'Premium overland build designed for extended adventures. Equipped with everything needed for off-grid exploration.',
    '2026 Ford F450 King Ranch',
    'Overland Series',
    16500000,
    'available',
    2026,
    0,
    '/IMG_1246.jpg',
    '["39\" mud-terrain tires", "Front and rear lockers", "Auxiliary fuel system (65 gal)", "Roof-mounted tent platform", "Dual battery system with solar panel prep", "Onboard air compressor"]'
  ),
  (
    '2026 F450 Platinum - Premier Edition',
    'The ultimate custom build featuring maximum capability and signature styling. Limited availability.',
    '2026 Ford F450 Platinum',
    'Premier Edition',
    19500000,
    'available',
    2026,
    0,
    '/IMG_1249.jpg',
    '["41\" premium all-terrain tires", "Full body armor package", "Custom lighting system", "Premium leather interior upgrades", "Advanced electronics package", "Ceramic coating protection"]'
  );
