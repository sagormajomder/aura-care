import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caretakers } from '@/data/caretakers';

export async function generateStaticParams() {
  return caretakers.map((caretaker) => ({
    id: caretaker.id,
  }));
}

export default async function CaretakerProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caretaker = caretakers.find((c) => c.id === id);

  if (!caretaker) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-7xl">
                👤
              </div>
              <div className="text-white text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{caretaker.name}</h1>
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <span className="text-yellow-300 text-xl">⭐</span>
                  <span className="text-xl font-semibold">{caretaker.rating}</span>
                  <span className="text-lg">({caretaker.reviews} reviews)</span>
                </div>
                <p className="text-lg">{caretaker.experience} years of experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">About</h2>
                  <p className="text-gray-700 leading-relaxed">{caretaker.bio}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Specialties</h2>
                  <div className="flex flex-wrap gap-2">
                    {caretaker.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium"
                      >
                        {specialty.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Certifications</h2>
                  <ul className="space-y-2">
                    {caretaker.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    {caretaker.languages.map((language) => (
                      <span
                        key={language}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Availability</h2>
                  <div className="flex flex-wrap gap-2">
                    {caretaker.availability.map((day) => (
                      <span
                        key={day}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-600 mb-2">Hourly Rate</p>
                    <p className="text-4xl font-bold text-blue-600">${caretaker.hourlyRate}</p>
                    <p className="text-gray-600">per hour</p>
                  </div>
                  <Link
                    href={`/booking?caretakerId=${caretaker.id}`}
                    className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Book Now
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span className="font-semibold">{caretaker.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold">{caretaker.experience} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-semibold">{caretaker.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reviews:</span>
                      <span className="font-semibold">{caretaker.reviews}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href="/caretakers"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Caretakers
          </Link>
        </div>
      </div>
    </div>
  );
}
