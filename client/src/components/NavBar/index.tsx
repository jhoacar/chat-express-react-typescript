import {
  Anchor,
  Box,
  Header,
  Image,
  Menu,
  Nav,
  ResponsiveContext,
} from 'grommet';

export function NavBar({ ...props }) {
  return (
    <div {...props}>
      <Header background="dark-1" pad="medium">
        <Box direction="row" align="center" gap="small">
          <Image src="/icon.svg" width="50px" height="50px" />
          <Header>Web App for VideoChat ( WebRTC )</Header>
        </Box>
        <ResponsiveContext.Consumer>
          {(responsive) => (responsive === 'small' ? (
            <Menu
              label="Click me"
              items={[
                { label: 'This is', onClick: () => { } },
                { label: 'The Menu', onClick: () => { } },
                { label: 'Component', onClick: () => { } },
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="/login" label="Sign In" />
              <Anchor href="/register" label="Sign Up" />
            </Nav>
          ))}
        </ResponsiveContext.Consumer>
      </Header>
    </div>
  );
}

export default NavBar;
