import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import '@fontsource-variable/plus-jakarta-sans/wght.css';
import '@fontsource-variable/plus-jakarta-sans/wght-italic.css';
import './index.css';

const root = document.getElementById('root')!;

// Production builds ship prerendered HTML (see scripts/prerender.js); hydrate it instead of re-rendering.
if (root.firstElementChild) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
