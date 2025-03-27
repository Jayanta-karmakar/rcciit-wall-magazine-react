<<<<<<< HEAD
# RCCIIT Wall Magazine - MCA 21-23

A web platform showcasing the Wall Magazine for the MCA 2021-2023 batch of RCC Institute of Information Technology (RCCIIT), Kolkata.

## Features

- Interactive Gallery: Responsive image grid with lazy loading and modal pop-up
- Responsive Design: Mobile-friendly navigation with hamburger toggle
- Dynamic Pages: Home, About (with college info and map), and Contact (team details)
- Keyboard Support: ESC key closes modals
- Social Integration: Direct links to social media and email

## Technologies

- React with TypeScript
- React Router
- CSS
- React Icons (Font Awesome)
- Google Maps Embed API

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/rcciit-wall-magazine.git
2. Install dependencies:
   cd rcciit-wall-magazine
   npm install
3. Start dev server:
   npm start

## Usage

- Click thumbnails to view full-size images
- Navigation menu: Home (gallery), About (college info), Contact (team)
- Footer social icons for connections

## Project Structure

```
src/
├── components/ (Gallery, Header, Footer)
├── pages/ (HomePage, AboutPage, ContactPage)
├── utils/ (imageData)
├── assets/ (photos)
└── styles/ (CSS files)
```

## Team

Developers:
- Jayanta Karmakar (@Jayanta-karmakar)
- Suvendu Dinda (@SUVENDU027)

## License

All rights reserved by RCCIIT. Content reuse requires permission.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> e943849 (add new photos and thumbnails for various users and events)
