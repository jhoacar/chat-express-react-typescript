/* eslint-disable react/jsx-no-constructed-context-values */
import { Suspense, useState } from 'react';
import AuthContext from '@/contexts/auth';
import { getToken } from '@/utils/token';
import { Spinner } from '@/components';

// ** Router Import
import Router from './router/Router';

// ** Hooks Imports

function App() {
  const [auth, setAuth] = useState(getToken() !== null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
