import { ReactNode } from 'react';
import { NavBar } from '@components/NavBar';

import { Footer } from '@components/Footer';
import { Grommet } from 'grommet';
import SideBar from '@components/SideBar';
import styles from './index.module.scss';

export function Layout({ children }: LayoutProps) {
  return (
    <Grommet className={styles.grommet}>
      <SideBar className={styles.sidebar} />
      <main className={styles.main}>
        <NavBar className={styles.navbar} />
        <div className={styles.content}>
          {children}
        </div>
        <Footer className={styles.footer} />
      </main>
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
