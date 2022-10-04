import {
  Anchor, Box, ResponsiveContext, Text,
} from 'grommet';

function Footer({ ...props }) {
  return (
    <footer {...props}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box
            background="dark-1"
            direction="row"
            justify="center"
            height="100%"
            pad={{ top: 'medium', bottom: 'medium' }}
          >
            {size !== 'small' && size !== 'xsmall' && (
              <Text weight="bold" size="medium">
                <span>Page made by Jhoan Carrero - </span>
                <Anchor href="https://github.com/jhoacar">
                  https://github.com/jhoacar
                </Anchor>
              </Text>
            )}

          </Box>
        )}
      </ResponsiveContext.Consumer>
    </footer>
  );
}

export { Footer };
