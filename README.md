# Mt. Everest Private Mastermind Landing Page

A premium, password-protected landing page for an exclusive C-level executive mastermind program. Built with React, featuring stunning mountain imagery and sophisticated authentication.

![Mt. Everest Private Mastermind](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-cyan)

## 🏔️ Features

### 🔐 Password Protection
- **Multiple Access Codes**: SUMMIT, PINNACLE, ALTITUDE, EVEREST, ASCEND, BASECAMP, LEGEND
- **Secure Authentication**: Uncontrolled React components prevent input issues
- **Premium Loading Animation**: 1.5-second authentication delay for exclusivity feel
- **Error Handling**: Clear feedback for invalid access codes

### 🎨 Premium Design
- **Mountain Imagery**: High-quality Everest and mountain photography
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Gradient Backgrounds**: Sophisticated color schemes with amber accents
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Glass Morphism**: Modern backdrop blur effects throughout

### 📱 User Experience
- **Progressive Disclosure**: Password gate → Main landing page flow
- **Call-to-Action Focus**: Prominent phone number and contact buttons
- **Social Proof Elements**: Exclusivity badges and limited availability messaging
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/winzenburg/everest.git
   cd everest
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Testing the Password Protection

Use any of these access codes to test the authentication:
- `SUMMIT`
- `PINNACLE` 
- `ALTITUDE`
- `EVEREST`
- `ASCEND`
- `BASECAMP`
- `LEGEND`

*Note: Passwords are case-insensitive*

## 🛠️ Development

### Project Structure
```
everest-mastermind/
├── src/
│   ├── components/ui/          # Reusable UI components
│   ├── assets/                 # Images and static assets
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # React entry point
│   ├── index.css              # Global styles and Tailwind imports
│   └── App.css                # Component-specific styles
├── public/                     # Static public assets
├── dist/                       # Production build output
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # This file
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Key Dependencies

- **React 18.3.1** - UI framework
- **Vite 6.0.1** - Build tool and dev server
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **Framer Motion 11.11.17** - Animation library
- **Lucide React 0.468.0** - Icon library
- **Radix UI** - Accessible component primitives

## 🎯 Customization

### Changing Access Codes
Edit the `validPasswords` array in `src/App.jsx`:
```javascript
const validPasswords = ['SUMMIT', 'PINNACLE', 'YOUR_CUSTOM_CODE']
```

### Updating Contact Information
Modify the phone number in the final CTA section:
```javascript
<p className="text-3xl font-bold mb-2">983-777-5424</p>
```

### Customizing Colors
The design uses a sophisticated color palette. Key colors can be modified in:
- `tailwind.config.js` for theme colors
- `src/index.css` for CSS custom properties
- Individual components for specific styling

### Adding Images
1. Place images in `src/assets/`
2. Import in `App.jsx`:
   ```javascript
   import yourImage from './assets/your-image.jpg'
   ```
3. Use in component:
   ```javascript
   style={{ backgroundImage: `url(${yourImage})` }}
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing if needed

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload contents of `dist/` folder to your web server
3. Configure server to serve `index.html` for all routes

### Environment Variables
If you need environment-specific configurations:
1. Create `.env` files for different environments
2. Use `import.meta.env.VITE_*` variables in your code
3. Configure your deployment platform to use these variables

## 🔧 Technical Details

### Password Authentication
- Uses `useRef` instead of `useState` to prevent re-rendering issues
- Implements uncontrolled components for stable input behavior
- Case-insensitive password matching
- Simulated loading delay for premium user experience

### Performance Optimizations
- Vite for fast development and optimized builds
- Tree-shaking for minimal bundle size
- Lazy loading of images where appropriate
- Efficient React component structure

### Browser Compatibility
- Modern browsers (Chrome 88+, Firefox 85+, Safari 14+)
- Mobile responsive design
- Touch-friendly interface elements

## 🐛 Troubleshooting

### Common Issues

**Password input not working**
- This was a known issue that has been fixed using uncontrolled components
- If you experience issues, ensure you're using the latest version

**Images not loading**
- Check that image files are in `src/assets/`
- Verify import statements in `App.jsx`
- Ensure image files are committed to git

**Build failures**
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (18+ required)
- Clear `node_modules` and reinstall if needed

**Styling issues**
- Ensure Tailwind CSS is properly configured
- Check that `src/index.css` imports Tailwind directives
- Verify PostCSS configuration

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Support

For technical support or customization requests:
- Create an issue in this repository
- Contact: ryanwinzenburg@gmail.com

## 🎯 Marketing Features

### Conversion Optimization
- **Scarcity Marketing**: "Only 8 positions available"
- **Social Proof**: Elite network messaging
- **Authority Building**: Everest metaphor for peak performance
- **Exclusive Access**: Password protection creates VIP feeling
- **Clear CTA**: Prominent phone number and action buttons

### Target Audience
- C-level executives of $10M+ companies
- Serial entrepreneurs with proven exits
- Industry leaders and visionaries
- High-net-worth individuals seeking exclusive experiences

### Key Messaging
- **Exclusivity**: By invitation only, confidential access
- **Transformation**: "Where legends are forged"
- **Elite Network**: Connect with hand-selected leaders
- **Peak Performance**: Everest metaphor for reaching new heights

---

**Built with ❤️ for exclusive experiences at the summit of success.**

