# QuickBank Development Guide

## Project Information
- **Project Name**: QuickBank
- **Description**: Fast, secure global money transfer platform
- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Lucide React
- **Status**: UI/UX Complete - Ready for Backend Integration

## Setup Instructions

### Initial Setup
```bash
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Build & Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Key Commands to Remember

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build production bundle |
| `npm run lint` | Check code quality |
| `npm install` | Install dependencies |

## Project Structure

```
app/
├── page.tsx              # Landing page (/)
├── login/page.tsx        # Login page (/login)
├── signup/page.tsx       # Signup page (/signup)
├── dashboard/page.tsx    # Dashboard (/dashboard)
├── send-money/page.tsx   # Send money (/send-money)
├── receive-money/page.tsx # Receive money (/receive-money)
├── recipients/           # Recipients management
│   ├── page.tsx          # Recipients list
│   └── add/page.tsx      # Add recipient
├── transactions/page.tsx # Transaction history
├── profile/page.tsx      # User profile
├── settings/page.tsx     # Settings
├── forgot-password/page.tsx # Password reset
└── layout.tsx            # Root layout
```

## Key Features Implemented

✅ Landing Page with Hero, Features, Pricing
✅ Authentication (Login/Signup/Password Reset)
✅ Dashboard with Balance & Quick Actions
✅ Send Money (Multi-step wizard)
✅ Receive Money (Account details sharing)
✅ Recipients Management (CRUD operations)
✅ Transaction History (Filtering & sorting)
✅ User Profile (Edit personal info)
✅ Settings (Notifications, Security, Preferences)

## Important Notes

1. **State Management**: Currently using React Hooks (useState)
   - For backend integration, consider Redux, Zustand, or Context API

2. **Authentication**: Mock implementation currently
   - Integrate with backend auth service (JWT, OAuth, etc.)

3. **Data**: All data is mock/sample data
   - Connect to real API endpoints for production

4. **Styling**: 
   - Primary Color: #0066FF
   - Use Tailwind utilities for consistency
   - Custom components in globals.css

5. **Icons**: Using Lucide React
   - 1000+ icons available
   - Import as: `import { IconName } from 'lucide-react'`

## Color Palette

```
Primary (Blue):     #0066FF
Secondary (Light):  #F0F4F8
Success (Green):    #22C55E
Warning (Amber):    #F59E0B
Error (Red):        #EF4444
Dark (Gray):        #1F2937
```

## Common Patterns

### Form Handling
```typescript
const [formData, setFormData] = useState({...})
const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
}
```

### Navigation
```typescript
import Link from 'next/link'
// Client-side navigation with Link
// Use useRouter for programmatic navigation in 'use client'
```

### Styling
```typescript
// Button classes
className="btn-primary"   // Primary blue button
className="btn-secondary" // Gray secondary button

// Card styling
className="card" // White card with shadow and border

// Input styling
className="input-field" // Standardized input field
```

## Next Steps for Development

1. **Backend Integration**
   - Create API routes or connect to external API
   - Implement proper authentication
   - Set up database models

2. **State Management**
   - Implement global state for auth, user, transactions
   - Add loading and error states

3. **Testing**
   - Add unit tests with Jest
   - Add e2e tests with Cypress or Playwright

4. **Performance**
   - Implement image optimization
   - Add performance monitoring
   - Optimize bundle size

5. **Security**
   - Implement rate limiting
   - Add CSRF protection
   - Use secure headers

6. **Deployment**
   - Set up CI/CD pipeline
   - Deploy to Vercel/AWS/etc.
   - Set up monitoring and logging

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_API_KEY=your_key
```

See `.env.example` for all available options.

## Troubleshooting

### Port Already in Use
```bash
# Change port
npm run dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next
npm run dev
```

### Update Dependencies
```bash
npm update
```

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

## Team Notes

- Keep components in app folder (App Router)
- Use TypeScript for type safety
- Follow existing code style and patterns
- Update CLAUDE.md when adding new patterns
- Test on mobile devices regularly

---

Last Updated: December 2024
