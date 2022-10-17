import { Spinner } from '@/components';
import { Layout } from '@/layouts';

export function Home() {
  return (
    <Layout>
      <Spinner />
      You must login for create a Video Chat
    </Layout>
  );
}

export default Home;
