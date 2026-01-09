import Link from 'next/link';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="text-6xl mb-4 text-center">{service.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
        {service.title}
      </h3>
      <p className="text-gray-600 text-center mb-6">{service.description}</p>
      <Link
        href={`/services?category=${service.category}`}
        className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Learn More
      </Link>
    </div>
  );
}
