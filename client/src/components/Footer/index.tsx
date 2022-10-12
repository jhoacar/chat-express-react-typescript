import {
  Anchor, Box, ResponsiveContext, Text,
} from 'grommet';

function Footer() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          background="dark-1"
          direction="row"
          justify="center"
          height="100%"
          pad={{ top: 'medium', bottom: 'medium' }}
        >

          <Text size={size} textAlign="center">
            <span>Source code in </span>
            {(size === 'small' || size === 'xsmall') && <br />}
            <Anchor href="https://github.com/jhoacar/chat-express-react-typescript">
              https://github.com/jhoacar/chat-express-react-typescript
            </Anchor>
          </Text>

        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export { Footer };
