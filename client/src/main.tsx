// ** React Imports
import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// ** Toast
import { Toaster } from 'react-hot-toast';
// ** Tailwind
import { ThemeProvider } from '@material-tailwind/react';

import '@/assets/css/index.css';

import Spinner from '@/components/Spinner';
import { store } from './redux';

// ** Lazy load app
const LazyApp = lazy(() => import('./App'));

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback={<Spinner />}>
        <Provider store={store}>
          <LazyApp />
        </Provider>
        <Toaster
          position="bottom-right"
          toastOptions={{ className: 'react-hot-toast' }}
        />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
);
