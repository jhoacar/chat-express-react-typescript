// ** React Imports
import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
// ** Toast
import { Toaster } from 'react-hot-toast';

import '@assets/scss/main.scss';

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** Lazy load app
const LazyApp = lazy(() => import('./App'));

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Cargando</div>}>
      <LazyApp />
      <Toaster position="top-right" toastOptions={{ className: 'react-hot-toast' }} />
    </Suspense>
  </BrowserRouter>,
);
