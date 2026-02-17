# eWa - Modern Super App 🚀

A modern, feature-rich super app built with Next.js 14, TypeScript, and Tailwind CSS. eWa combines essential urban services including parking management, digital wallet, and e-vignette purchases in one beautiful interface.

## ✨ Features

### 🎫 E-Vignette Purchase
- Select from multiple vignette durations (3-day, 10-day, 30-day, 1-year)
- Dynamic pricing with real-time updates
- Vehicle registration and information management
- Secure payment processing

### 🅿️ Parking Management
- Interactive Google Maps integration showing Vienna city center
- Real-time parking zone information (Zones A, B, C)
- Draggable bottom sheet for parking details
- Mobile-optimized with smooth drag interactions
- Touch-friendly controls with 200px collapsed state

### 💳 Digital Wallet
- Swipeable card carousel with smooth animations
- Mouse drag support for desktop users
- Multiple payment methods (Visa, Mastercard)
- Add new card functionality
- Transaction history with categorized spending

### 🔐 Authentication
- Modern login/register flow
- Avatar-based user profiles
- Secure session management
- Smooth navigation between auth states

### 📱 User Experience
- Responsive mobile-first design
- Smooth animations and transitions
- Bottom navigation with active state indicators
- Dark theme with cyan accent colors
- Material Symbols icons throughout

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom component library
- **Icons:** Material Symbols
- **Maps:** Google Maps Embed API

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Lacius76/eWa-app.git
cd eWa-app
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

## 📁 Project Structure

```
ewa-app/
├── app/
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   ├── onboarding/     # Onboarding flow
│   ├── parking/        # Parking management
│   ├── wallet/         # Digital wallet
│   ├── payment/        # E-vignette purchase & payment
│   ├── success/        # Success confirmation
│   └── profile/        # User profile
├── components/
│   ├── BottomNav.tsx   # Bottom navigation bar
│   ├── Button.tsx      # Custom button component
│   └── Card.tsx        # Card component
└── public/
    └── img/            # Images and assets
```

## 🎨 Design Features

- **Color Scheme:** Dark theme with cyan (#00D9FF) primary color
- **Typography:** System fonts optimized for readability
- **Animations:** Smooth transitions with 300ms duration
- **Interactive Elements:** Hover states, active states, and micro-interactions
- **Accessibility:** Touch targets sized for mobile (minimum 44x44px)

## 📱 Key Pages

1. **Dashboard** - Overview of all services
2. **Parking** - Google Maps with draggable bottom sheet
3. **Wallet** - Swipeable card carousel
4. **Payment** - E-vignette type selector with dynamic pricing
5. **Success** - Payment confirmation

## 🔧 Configuration

The app uses Tailwind CSS with custom configuration in `tailwind.config.ts`:
- Custom colors (primary, accent, surface variants)
- Custom shadows (neon glow effects)
- Custom scrollbar hiding utilities

## 🌟 Highlights

- **Mobile-First:** Optimized for 375x812 viewport (iPhone design)
- **Smooth Interactions:** Snap scrolling, drag gestures, and smooth animations
- **Modern Stack:** Latest Next.js 14 with App Router
- **Type-Safe:** Full TypeScript coverage
- **Component-Based:** Reusable components throughout

## 📝 License

MIT License - feel free to use this project for learning or as a starting point for your own super app!

## 👨‍💻 Author

Built with ❤️ by Laszlo Foldvary

---

**Note:** This is a demo application. Payment processing and map integrations are for demonstration purposes only.
