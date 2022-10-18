import Footer from '@/components/Footer';
import Bar from '@/components/Bar';

export function Layout({ children }: any) {
  return (
    <main className={`
    h-full w-full 
    overflow-x-hidden 
    flex flex-col 
    lg:grid lg:grid-cols-2
    `}
    >
      <aside className={`
      max-h-[5rem] lg:basis-5
      `}
      >
        <Bar />
      </aside>
      <article className={`
      mt-[5rem] 
      w-full
      lg:translate-y-0 lg:flex lg:m-0
      `}
      >
        <section className={`
        lg:w-full
        min-h-full
        flex
        flex-col 
        items-center 
        justify-center 
        bg-white dark:bg-gray-800
        rounded-lg 
        border 
        border-gray-200 dark:border-gray-700
        shadow-md
                `}
        >
          {children}
        </section>
      </article>
      <footer className={`
      w-full mt-auto
      lg:translate-y-0 
      `}
      >
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
