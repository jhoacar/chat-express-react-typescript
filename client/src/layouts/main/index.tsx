import Footer from '@/components/Footer';
import Bar from '@/components/Bar';

export function Layout({ children }: any) {
  return (
    <main className={`
    h-full w-full 
    overflow-x-hidden 
    flex flex-col
    bg-gray-100 
    lg:flex-row
    lg:flex-wrap
    `}
    >
      <aside className={`
      max-h-[5rem]
      bg-blue-100
      lg:max-h-max 
      lg:min-h-[90%]
      lg:w-max
      lg:border
      lg:border 
      lg:border-gray-200
      `}
      >
        <Bar />
      </aside>
      <article className={`
      mt-[5rem] 
      lg:translate-y-0 
      lg:flex lg:m-0
      lg:mx-auto
      lg:my-auto
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
                `}
        >
          {children}
        </section>
      </article>
      <footer className={`
      w-full mt-auto
      lg:m-0
      lg:basis-full
      lg:translate-y-0 
      `}
      >
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
