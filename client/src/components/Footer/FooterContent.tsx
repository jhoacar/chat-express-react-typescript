import {
  Anchor, Box, ResponsiveContext, Text,
} from 'grommet';
import styled from 'styled-components';
import { data } from './data';

const StyledAnchor = styled(Anchor)`
  font-weight: 200;
`;

const getContent = () => data.map((item, index) => (
  <Box gap="medium" key={index + item[0]}>
    <Text weight="bold" size="small">
      {item[0]}
    </Text>
    <StyledAnchor href="/" size="small" color="black">
      {item[1]}
    </StyledAnchor>
    <StyledAnchor href="/" size="small" color="black">
      {item[2]}
    </StyledAnchor>
    <StyledAnchor href="/" size="small" color="black">
      {item[3]}
    </StyledAnchor>
  </Box>
));

function FooterContent() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          direction="row"
          gap={size !== 'xsmall' && size !== 'small' ? 'xlarge' : 'small'}
        >
          {getContent()}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export { FooterContent };
