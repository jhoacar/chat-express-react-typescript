import { ReactNode } from 'react';

import './index.scss';

export function Layout({ children }:LayoutProps) {
  return (
    <>
      <header contentEditable>
        Header
      </header>
      <main contentEditable>
        {children}
      </main>
      <footer contentEditable>
        Footer
      </footer>
    </>
  );
}

export interface LayoutProps {
  children?: ReactNode; // best, accepts everything React can render
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
