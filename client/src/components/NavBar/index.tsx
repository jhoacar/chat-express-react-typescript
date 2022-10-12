import {
  Anchor,
  Box,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
  Text,
} from 'grommet';

import { Chat } from 'grommet-icons';

export function NavBar() {
  return (
    <Box
      background="dark-1"
      pad="medium"
      direction="row"
      align="center"
      justify="between"
    >
      <Box direction="row" align="center" gap="small">
        <ResponsiveContext.Consumer>
          {(size) => (
            <Header>
              <Chat size="medium" color="green" />
              <Text size={size}>
                {(size === 'small' || size === 'xsmall')
                                    && 'VideoChat'}
                {size !== 'small'
                                    && size !== 'xsmall'
                                    && 'Web App for VideoChat ( WebRTC )'}
              </Text>
            </Header>
          )}
        </ResponsiveContext.Consumer>
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) => (responsive === 'small' ? (
          <Menu
            size={responsive}
            label="Click me"
            items={[
              { label: 'This is', onClick: () => {} },
              { label: 'The Menu', onClick: () => {} },
              { label: 'Component', onClick: () => {} },
            ]}
          />
        ) : (
          <Nav direction="row">
            <Anchor
              size={responsive}
              href="/login"
              label="Sign In"
            />
            <Anchor
              size={responsive}
              href="/register"
              label="Sign Up"
            />
          </Nav>
        ))}
      </ResponsiveContext.Consumer>
    </Box>
  );
}

export default NavBar;
