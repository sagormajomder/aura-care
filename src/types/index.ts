export type ServiceCategory = 'childcare' | 'elderly-care' | 'special-care';

export interface Caretaker {
  id: string;
  name: string;
  age: number;
  experience: number;
  rating: number;
  reviews: number;
  hourlyRate: number;
  specialties: ServiceCategory[];
  image: string;
  bio: string;
  availability: string[];
  certifications: string[];
  languages: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: string;
}

export interface Booking {
  id: string;
  caretakerId: string;
  caretakerName: string;
  serviceType: ServiceCategory;
  date: string;
  time: string;
  duration: number;
  totalCost: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  specialRequests?: string;
}
