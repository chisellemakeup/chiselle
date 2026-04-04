# Chiselle – Bridal Makeup & Hair Website

A fully responsive React + Vite + Tailwind CSS website built from the Figma design.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (runs at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
chiselle-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky header with mobile menu
│   │   ├── Hero.jsx          # Hero section with photo collage
│   │   ├── MarqueeBanner.jsx # Scrolling text ticker
│   │   ├── About.jsx         # About + stats section
│   │   ├── Features.jsx      # WhyUs, SignatureStyle, HowWeWork
│   │   ├── BeforeAfter.jsx   # Drag-to-compare slider
│   │   ├── Services.jsx      # 3 service cards
│   │   ├── Gallery.jsx       # Masonry photo grid
│   │   ├── Testimonials.jsx  # Auto-rotating carousel
│   │   ├── Contact.jsx       # Enquiry form
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js        # All text content in one place
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🖼️ Adding Real Photos

Replace the gradient placeholder `<div>`s in each component with `<img>` tags:

```jsx
// Before (placeholder)
<div className="w-full h-full bg-gradient-to-b from-brand-gold to-brand-cream" />

// After (real image)
<img src="/images/bride-hero.jpg" alt="Bride" className="w-full h-full object-cover" />
```

Put your images in `public/images/` and reference them as `/images/filename.jpg`.

## 🎨 Brand Colours (tailwind.config.js)

| Token          | Hex       | Usage                  |
|----------------|-----------|------------------------|
| brand-dark     | #3d2b1f   | Primary dark brown     |
| brand-darker   | #2a1e15   | Footer background      |
| brand-brown    | #6b4c3b   | Mid brown text         |
| brand-mid      | #9c7a5e   | Labels, muted text     |
| brand-gold     | #c9a882   | Accent gold            |
| brand-light    | #e8d5b7   | Light warm tone        |
| brand-cream    | #f5ede0   | Section backgrounds    |
| brand-bg       | #faf6f0   | Page background        |

## 📬 Contact Form

The form in `Contact.jsx` is set up with local state. To make it functional, wire it to:
- [Formspree](https://formspree.io) – easiest no-backend option
- [EmailJS](https://emailjs.com) – send emails directly from browser
- Your own API endpoint
