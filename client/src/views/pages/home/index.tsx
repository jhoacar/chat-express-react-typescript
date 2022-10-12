import { Layout } from '@components/Layout';
import {
  Box, Card, CardBody, CardHeader, Paragraph,
} from 'grommet';

export function Home() {
  return (
    <Layout background="dark-2" padding="0">
      <Box height="100%" direction="row" align="center" justify="center">
        <Card width="80%" height="90%" background="dark-1">
          <CardHeader pad="large" height="20%" width="100%">
            <Box align="center" width="100%">
              <Paragraph size="large">
                You must login for create a Video Chat
              </Paragraph>
            </Box>
          </CardHeader>
          <CardBody pad="large" height="100%">
            Body
          </CardBody>
        </Card>
      </Box>
    </Layout>
  );
}

export default Home;
