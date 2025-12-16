import React, { useEffect, useState } from 'react';
import { supabase, InventoryUnit } from '../lib/supabase';
import { Truck, DollarSign, Calendar, Gauge, Shield } from 'lucide-react';

export const Inventory: React.FC = () => {
  const [units, setUnits] = useState<InventoryUnit[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'available' | 'sold'>('all');

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('inventory')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUnits(data || []);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUnits = units.filter((unit) => {
    if (filter === 'all') return true;
    return unit.status === filter;
  });

  const formatPrice = (priceInCents: number | null) => {
    if (!priceInCents) return 'Contact for pricing';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(priceInCents / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-lime-500 text-xl">Loading inventory...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <header className="sticky top-0 z-30 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-lime-500" />
            <span className="font-semibold tracking-wide uppercase text-sm">
              Elite Builds
            </span>
          </div>
          <a
            href="/"
            className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Available Inventory</h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Browse our current selection of custom-built trucks. Each vehicle is meticulously
            crafted to deliver unmatched capability and style.
          </p>
        </div>

        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-lime-500 text-black'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            All Units
          </button>
          <button
            onClick={() => setFilter('available')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'available'
                ? 'bg-lime-500 text-black'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setFilter('sold')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'sold'
                ? 'bg-lime-500 text-black'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Recently Sold
          </button>
        </div>

        {filteredUnits.length === 0 ? (
          <div className="text-center py-20">
            <Truck className="w-16 h-16 mx-auto mb-4 text-neutral-600" />
            <p className="text-neutral-400 text-lg">No units found matching your filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUnits.map((unit) => (
              <div
                key={unit.id}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-lime-500/50 transition-all duration-300 group"
              >
                {unit.status === 'sold' && (
                  <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    SOLD
                  </div>
                )}

                <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                  {unit.image_url ? (
                    <img
                      src={unit.image_url}
                      alt={unit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Truck className="w-20 h-20 text-neutral-600" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    {unit.package_type && (
                      <span className="inline-block px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-medium mb-2">
                        {unit.package_type}
                      </span>
                    )}
                    <h3 className="text-xl font-bold mb-1">{unit.title}</h3>
                    {unit.base_truck && (
                      <p className="text-sm text-neutral-400">{unit.base_truck}</p>
                    )}
                  </div>

                  {unit.description && (
                    <p className="text-sm text-neutral-300 mb-4 line-clamp-2">
                      {unit.description}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    {unit.year && (
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Calendar className="w-4 h-4" />
                        <span>{unit.year}</span>
                      </div>
                    )}
                    {unit.mileage !== null && (
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Gauge className="w-4 h-4" />
                        <span>{unit.mileage.toLocaleString()} mi</span>
                      </div>
                    )}
                    {unit.vin && (
                      <div className="flex items-center gap-2 text-neutral-400 col-span-2">
                        <Shield className="w-4 h-4" />
                        <span className="text-xs font-mono">{unit.vin}</span>
                      </div>
                    )}
                  </div>

                  {unit.features && unit.features.length > 0 && (
                    <div className="mb-4">
                      <ul className="text-sm text-neutral-300 space-y-1">
                        {unit.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-lime-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {unit.features.length > 3 && (
                          <li className="text-neutral-500 text-xs">
                            +{unit.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                    <div>
                      <div className="flex items-center gap-1 text-2xl font-bold text-lime-500">
                        <DollarSign className="w-5 h-5" />
                        {formatPrice(unit.price)}
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">
                        Listed {formatDate(unit.created_at)}
                      </div>
                    </div>
                    {unit.status === 'available' && (
                      <button className="px-4 py-2 bg-lime-500 text-black rounded-lg text-sm font-medium hover:bg-lime-400 transition-colors">
                        Inquire
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
