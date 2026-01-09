import Link from 'next/link';
import { Caretaker } from '@/types';

interface CaretakerCardProps {
  caretaker: Caretaker;
}

export default function CaretakerCard({ caretaker }: CaretakerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-6xl">
          👤
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{caretaker.name}</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-semibold">{caretaker.rating}</span>
            <span className="text-sm text-gray-500">({caretaker.reviews})</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{caretaker.bio}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-700">
            <span className="font-medium mr-2">Experience:</span>
            <span>{caretaker.experience} years</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <span className="font-medium mr-2">Rate:</span>
            <span className="text-blue-600 font-semibold">${caretaker.hourlyRate}/hour</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {caretaker.specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {specialty.replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-2">
          <Link
            href={`/caretakers/${caretaker.id}`}
            className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Profile
          </Link>
          <Link
            href={`/booking?caretakerId=${caretaker.id}`}
            className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
