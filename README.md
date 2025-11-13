# QuickBank - Fast Money Transfer Platform

A modern, responsive money transfer application built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by Remitly and Tap Tap, QuickBank allows users to send and receive money globally with ease.

## Features

- **Landing Page**: Comprehensive marketing page with features, pricing, and CTA
- **User Authentication**: Secure login and signup flows
- **Dashboard**: Personal financial dashboard with balance overview
- **Send Money**: Multi-step transfer wizard with real-time exchange rates
- **Receive Money**: Easy account sharing for receiving transfers
- **Recipients Management**: Save and manage frequently used recipients
- **Transaction History**: Detailed transaction tracking and filtering
- **Profile Management**: Edit personal information and documents
- **Settings**: Notification preferences, security, and account settings
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)
- **Linting**: ESLint

## Project Structure

```
quickbank-frontend-app/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── login/
│   │   └── page.tsx            # Login page
│   ├── signup/
│   │   └── page.tsx            # Signup page
│   ├── dashboard/
│   │   └── page.tsx            # Main dashboard
│   ├── send-money/
│   │   └── page.tsx            # Send money wizard
│   ├── receive-money/
│   │   └── page.tsx            # Receive money page
│   ├── recipients/
│   │   └── page.tsx            # Recipients management
│   ├── transactions/
│   │   └── page.tsx            # Transaction history
│   ├── profile/
│   │   └── page.tsx            # User profile
│   └── settings/
│       └── page.tsx            # Account settings
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── .env.example               # Environment variables template
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository** (if using git):
   ```bash
   git clone <repository-url>
   cd quickbank-frontend-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages Overview

### Landing Page (`/`)
- Hero section with call-to-action
- Features showcase
- How it works section
- Pricing plans
- Footer with links

### Authentication
- **Login** (`/login`) - Email and password login with social options
- **Signup** (`/signup`) - User registration with email verification

### Dashboard (`/dashboard`)
- Balance overview
- Quick action cards
- Recent transactions
- Saved recipients

### Send Money (`/send-money`)
- 4-step transfer wizard
- Recipient selection
- Amount entry with real-time conversion
- Review and confirmation
- Payment method selection

### Receive Money (`/receive-money`)
- Account details display
- Copy to clipboard functionality
- Instructions for senders
- Recent deposits

### Recipients (`/recipients`)
- View all saved recipients
- Search and filter
- Add, edit, delete recipients
- Quick send action

### Transactions (`/transactions`)
- Detailed transaction history
- Filter by type and status
- Statistics overview
- Export functionality

### Profile (`/profile`)
- View and edit personal information
- Address details
- Document verification status

### Settings (`/settings`)
- Notification preferences
- Security settings (2FA, Biometric)
- Theme and language selection
- Help and support links
- Legal documents

## Styling

The project uses Tailwind CSS with custom color theme:
- **Primary**: #0066FF (Blue)
- **Secondary**: #F0F4F8 (Light Blue)
- **Success**: #22C55E (Green)
- **Warning**: #F59E0B (Amber)
- **Error**: #EF4444 (Red)
- **Dark**: #1F2937 (Dark Gray)

## Component Libraries

- **Lucide React**: Icon library with 1000+ icons
- **React Hooks**: For state management
- **Next.js Link**: For client-side navigation
- **Next.js Image**: For optimized image loading

## UI Features

- Responsive grid layouts
- Smooth transitions and hover effects
- Form validation and error handling
- Loading states and animations
- Cards and containers with shadows
- Modal-like overlays
- Toggle switches for settings
- Progress indicators and steppers

## Future Enhancements

- Backend API integration
- Real-time notifications
- Multi-language support
- Dark mode
- Payment gateway integration
- KYC/AML verification
- Push notifications
- Mobile app (React Native)
- Advanced analytics
- API documentation

## Security Notes

- This is a UI-only project
- All transaction data is mock data for demonstration
- Real API integration required for production
- Implement proper authentication and authorization
- Use environment variables for sensitive data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Code splitting with Next.js App Router
- CSS-in-JS optimization
- Image optimization
- SEO friendly with meta tags

## License

MIT License - Feel free to use this project for learning and development.

## Support

For issues or questions, please create an issue in the repository or contact support@quickbank.example.

---

Built with ❤️ using Next.js and Tailwind CSS
