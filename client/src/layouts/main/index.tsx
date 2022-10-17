import Footer from '@/components/Footer';
import Bar from '@/components/Bar';

export function Layout({ children }: any) {
  return (
    <main
      className={`
        h-full 
        flex flex-col 
        overflow-x-hidden`}
    >
      <article
        className={`
            w-full h-full
            mb-4
            lg:flex
            lg:m-0
            `}
      >
        <aside
          className={`
                h-20
                lg:h-full
                `}
        >
          <Bar />
        </aside>
        <section
          className={`
                h-full
                lg:w-full
                `}
        >
          <div
            className={`
          flex flex-col 
          items-center 
          justify-center 
          h-full 
          p-6 
          bg-white dark:bg-gray-800
          rounded-lg 
          border 
          border-gray-200 dark:border-gray-700
          shadow-md`}
          >
            {children}
          </div>
        </section>
      </article>
      <footer className="w-full h-20 mt-auto">
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
