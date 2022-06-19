import { size } from './breakpoints'
import { colors } from './palette'
import {
  calcRem,
  calcP,
  calcVw,
  flexSet,
  flexColumnSet,
  posCenterX,
  posCenterY,
  posCenter,
} from './position'

const theme = {
  calcRem,
  calcP,
  calcVw,
  flexSet,
  flexColumnSet,
  posCenterX,
  posCenterY,
  posCenter,
  colors,
  desktop: `(min-width: ${size.desktop})`,
}

export default theme
