import { ReactNode } from 'react';
import { NavBar } from '@components/NavBar';

import { Footer } from '@components/Footer';
import { Card, Grommet } from 'grommet';
import SideBar from '@components/SideBar';
import styles from './index.module.scss';

export function Layout({ children, ...rest }: any) {
  return (
    <Grommet className={styles.grommet}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <article className={styles.article}>
        <Card round="none" height="100%" {...rest}>
          {children}
        </Card>
      </article>
      <aside className={styles.sidebar}>
        <SideBar />
      </aside>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </Grommet>
  );
}

export interface LayoutProps {
  children?: ReactNode; // best, accepts everything React can render
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
