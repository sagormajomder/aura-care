'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import CaretakerCard from '@/components/CaretakerCard';
import { services } from '@/data/services';
import { caretakers } from '@/data/caretakers';
import { ServiceCategory } from '@/types';

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') as ServiceCategory | null;

  const filteredServices = category 
    ? services.filter(s => s.category === category)
    : services;

  const filteredCaretakers = category
    ? caretakers.filter(c => c.specialties.includes(category))
    : caretakers;

  const selectedService = category 
    ? services.find(s => s.category === category)
    : null;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category ? selectedService?.title : 'Our Services'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {category 
              ? selectedService?.description 
              : 'We provide comprehensive care services for all your family needs. Choose from our range of professional care services.'}
          </p>
        </div>

        {/* Filter Links */}
        {!category && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/services"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                All Services
              </Link>
              <Link
                href="/services?category=childcare"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Childcare
              </Link>
              <Link
                href="/services?category=elderly-care"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Elderly Care
              </Link>
              <Link
                href="/services?category=special-care"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Special Care
              </Link>
            </div>
          </div>
        )}

        {/* Services Grid */}
        {!category && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Available Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        )}

        {/* Category-specific content */}
        {category && (
          <>
            {/* Service Benefits */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category === 'childcare' && (
                  <>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Safe Environment</h3>
                        <p className="text-gray-600">Ensure your children are in safe, supervised care</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Educational Activities</h3>
                        <p className="text-gray-600">Engaging learning activities for development</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                        <p className="text-gray-600">Book care when you need it most</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Experienced Caregivers</h3>
                        <p className="text-gray-600">Certified professionals with years of experience</p>
                      </div>
                    </div>
                  </>
                )}
                {category === 'elderly-care' && (
                  <>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Personal Care</h3>
                        <p className="text-gray-600">Daily living assistance and personal care</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Companionship</h3>
                        <p className="text-gray-600">Social interaction and emotional support</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Medication Management</h3>
                        <p className="text-gray-600">Reminders and assistance with medications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Mobility Support</h3>
                        <p className="text-gray-600">Help with movement and physical activities</p>
                      </div>
                    </div>
                  </>
                )}
                {category === 'special-care' && (
                  <>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Specialized Training</h3>
                        <p className="text-gray-600">Caregivers trained in special needs care</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Individualized Support</h3>
                        <p className="text-gray-600">Care plans tailored to specific needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Medical Assistance</h3>
                        <p className="text-gray-600">Help with medical equipment and procedures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">✓</span>
                      <div>
                        <h3 className="font-semibold mb-1">Family Support</h3>
                        <p className="text-gray-600">Guidance and resources for families</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Back to all services */}
            <div className="mb-8">
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                ← View All Services
              </Link>
            </div>
          </>
        )}

        {/* Available Caretakers for this service */}
        {category && filteredCaretakers.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Available Caretakers for {selectedService?.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredCaretakers.slice(0, 6).map((caretaker) => (
                <CaretakerCard key={caretaker.id} caretaker={caretaker} />
              ))}
            </div>
            {filteredCaretakers.length > 6 && (
              <div className="text-center mt-8">
                <Link
                  href="/caretakers"
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  View All Caretakers
                </Link>
              </div>
            )}
          </section>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book a Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started today and find the perfect caretaker for your needs
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book Now
          </Link>
        </section>
      </div>
    </div>
  );
}
