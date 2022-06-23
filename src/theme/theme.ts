import { size } from './breakpoints';
import { colors } from './palette';
import * as position from './position';

const theme = {
  ...position,
  colors,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
