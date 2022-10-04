import { Spinner } from 'grommet';
import { Suspense } from 'react';

// ** Router Import
import Router from './router/Router';

// ** Hooks Imports

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router />
    </Suspense>
  );
}

export default App;
