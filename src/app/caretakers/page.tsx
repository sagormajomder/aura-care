'use client';

import { useState } from 'react';
import CaretakerCard from '@/components/CaretakerCard';
import { caretakers } from '@/data/caretakers';
import { ServiceCategory } from '@/types';

export default function CaretakersPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'price'>('rating');

  const filteredCaretakers = caretakers
    .filter((caretaker) => {
      if (selectedCategory === 'all') return true;
      return caretaker.specialties.includes(selectedCategory);
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'experience') return b.experience - a.experience;
      if (sortBy === 'price') return a.hourlyRate - b.hourlyRate;
      return 0;
    });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find a Caretaker</h1>
          <p className="text-lg text-gray-600">
            Browse our verified professionals and find the perfect match for your needs
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Service
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ServiceCategory | 'all')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Services</option>
                <option value="childcare">Childcare</option>
                <option value="elderly-care">Elderly Care</option>
                <option value="special-care">Special Care</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rating' | 'experience' | 'price')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="rating">Highest Rating</option>
                <option value="experience">Most Experience</option>
                <option value="price">Lowest Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredCaretakers.length}</span> caretaker{filteredCaretakers.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Caretaker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaretakers.map((caretaker) => (
            <CaretakerCard key={caretaker.id} caretaker={caretaker} />
          ))}
        </div>

        {filteredCaretakers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No caretakers found matching your criteria.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
