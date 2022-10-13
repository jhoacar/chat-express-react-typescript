import { ReactNode } from 'react';
import { NavBar } from '@components/NavBar';

import { Footer } from '@components/Footer';

import SideBar from '@components/SideBar';
import styles from './index.module.scss';

export function Layout({ children }: any) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <article className={styles.article}>
        <div>{children}</div>
      </article>
      <aside className={styles.sidebar}>
        <SideBar />
      </aside>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </main>
  );
}

export interface LayoutProps {
  children?: ReactNode // best, accepts everything React can render
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
