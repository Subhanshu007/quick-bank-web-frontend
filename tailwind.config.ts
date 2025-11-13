import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#F0F4F8',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        dark: '#1F2937',
      },
    },
  },
  plugins: [],
}
export default config
