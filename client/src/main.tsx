// ** React Imports
import ReactDOM from 'react-dom';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
// ** Toast
import { Toaster } from 'react-hot-toast';

// // ** PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// ** Lazy load app
const LazyApp = lazy(() => import('./App'));
ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Cargando</div>}>
      <LazyApp />
      <Toaster position="top-right" toastOptions={{ className: 'react-hot-toast' }} />
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root'),
);
