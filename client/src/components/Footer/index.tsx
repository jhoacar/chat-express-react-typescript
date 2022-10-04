import { Box, ResponsiveContext, Text } from 'grommet';

import { Logo, SocialMedia } from '@components';
import { FooterContent } from './FooterContent';

function Footer({ ...rest }) {
  return (
    <footer>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box
            direction="row"
            justify="between"
            border={{ side: 'top', color: 'light-4' }}
            pad={{ top: 'xlarge' }}
            {...rest}
          >
            <Box gap="large" align="start">
              <Box
                gap="small"
                direction="row-responsive"
                align="center"
                pad={{ horizontal: 'small' }}
              >
                <Logo />
                {size !== 'small' && size !== 'xsmall' && (
                <Text weight="bold" size="large">
                  App Teaser
                </Text>
                )}
              </Box>
              <SocialMedia />
            </Box>
            <FooterContent />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </footer>
  );
}

export { Footer };
