import React, { Suspense } from 'react';

// ** Router Import
import Router from './router/Router';

// ** Hooks Imports

function App() {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
}

export default App;
