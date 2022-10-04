import { Box, Stack } from 'grommet';

export function Logo() {
  return (
    <Stack anchor="center">
      <Box
        width="xxsmall"
        height="xxsmall"
        round="small"
        align="center"
        justify="center"
        border={{ color: 'brand', size: 'large' }}
        animation={['pulse', 'jiggle']}
      />
      <Box
        width="32px"
        height="32px"
        round="small"
        align="center"
        justify="center"
        background="white"
      />
    </Stack>
  );
}

export default Logo;
