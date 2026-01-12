# Lucas Ramos - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Redux.

## Features

- 🎨 Modern UI/UX design with smooth animations
- 🌓 Dark mode support
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎯 Smooth scroll navigation
- 🎬 Framer Motion animations

## Tech Stack

- **React** - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   └── Footer.jsx
├── store/          # Redux store
│   ├── store.js
│   └── portfolioSlice.js
├── App.jsx         # Main app component
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## Customization

All portfolio data is stored in `src/store/portfolioSlice.js`. Update the Redux state to modify:
- Profile information
- Work experience
- Skills
- Education

## License

MIT

