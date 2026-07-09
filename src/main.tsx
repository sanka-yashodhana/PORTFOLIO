import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (publicKey) {
  emailjs.init(publicKey);
} else {
  console.warn('EmailJS public key not found. Please set VITE_EMAILJS_PUBLIC_KEY in .env.local');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
