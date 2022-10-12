import { Spinner } from 'grommet'
import { Suspense, useState, createContext } from 'react'

// ** Router Import
import Router from './router/Router'

// ** Hooks Imports

const Context = createContext<any>({})

function App() {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const context: object = {
        stream: useState(null),
    }
    return (
        <Context.Provider value={context}>
            <Suspense fallback={<Spinner />}>
                <Router />
            </Suspense>
        </Context.Provider>
    )
}

export default App
