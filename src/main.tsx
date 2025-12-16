import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Simple routing based on path
const path = window.location.pathname;

const root = createRoot(document.getElementById('root')!);

if (path === '/inventory') {
  // Lazy load inventory page to avoid loading Supabase on home page
  import('./pages/Inventory.tsx').then(({ Inventory }) => {
    root.render(
      <StrictMode>
        <Inventory />
      </StrictMode>
    );
  });
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
