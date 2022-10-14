import { ReactNode } from 'react';
// import { NavBar } from '@components/NavBar';

import { Footer } from '@/components/Footer';

import SideBar from '@/components/SideBar';
import styles from './index.module.scss';

export function Layout({ children }: any) {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <aside className={styles.aside}>
          <SideBar />
        </aside>
        <section className={styles.section}>
          <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {children}
          </div>
        </section>
      </article>
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
