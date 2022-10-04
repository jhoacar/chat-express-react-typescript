import PropTypes from 'prop-types';
import { Box } from 'grommet';

function Section({ children, width, ...rest }:any) {
  return (
    <Box align="center" pad="large" {...rest}>
      <Box width={width}>{children}</Box>
    </Box>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

Section.defaultProps = {
  width: 'xlarge',
};

export { Section };
