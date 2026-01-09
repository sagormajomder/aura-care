# Aura Care

A Next.js application with TypeScript that provides reliable and trusted care services for children, elderly, and other family members. The application allows users to find and hire caretakers for different purposes such as babysitting, elderly care, or special care at home.

## Features

- **Service Categories**: Browse childcare, elderly care, and special care services
- **Caretaker Profiles**: View detailed profiles of verified caretakers including:
  - Experience and certifications
  - Hourly rates
  - Reviews and ratings
  - Availability
  - Languages spoken
- **Smart Filtering**: Filter caretakers by service type and sort by rating, experience, or price
- **Easy Booking**: Simple booking interface with:
  - Service selection
  - Date and time picker
  - Duration selection
  - Customer information form
  - Cost calculator
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sagormajomder/aura-care.git
cd aura-care
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
aura-care/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── booking/           # Booking page
│   │   ├── caretakers/        # Caretakers listing and profiles
│   │   ├── services/          # Services page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable React components
│   │   ├── CaretakerCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ServiceCard.tsx
│   ├── data/                  # Sample data
│   │   ├── caretakers.ts
│   │   └── services.ts
│   └── types/                 # TypeScript type definitions
│       └── index.ts
├── public/                    # Static assets
└── package.json
```

## Key Pages

- **Home (/)**: Landing page with hero section, featured services, and caretakers
- **Services (/services)**: Browse all services with filtering by category
- **Caretakers (/caretakers)**: Search and filter available caretakers
- **Caretaker Profile (/caretakers/[id])**: Detailed caretaker information
- **Booking (/booking)**: Book a care service with a caretaker

## Making It Production-Ready

To prepare for production:

1. **Database Integration**: Replace mock data with a real database (PostgreSQL, MongoDB, etc.)
2. **Authentication**: Add user authentication (NextAuth.js, Auth0, etc.)
3. **Payment Integration**: Add payment processing (Stripe, PayPal, etc.)
4. **Backend API**: Create API routes for CRUD operations
5. **Image Uploads**: Implement image storage for caretaker photos
6. **Email Notifications**: Add email confirmations for bookings
7. **Reviews System**: Implement a real review and rating system
8. **Real-time Availability**: Add calendar integration for caretaker availability

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.