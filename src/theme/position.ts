export const calcRem = (pxSize: number) => `${pxSize / 16}rem`

export const calcP = (total: number, part: number) => {
  return `${(part / total) * 100}%`
}

export const calcVw = (px: number) => {
  return `${(px / 360) * 100}vw`
}

export const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: row;
  justify-content: ${just};
  align-items: ${align};`
}

export const flexColumnSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`
}

export const posCenterX = (type = 'absolute') => {
  return `
  position: ${type};
  left:50%;
  transform:translateX(-50%);
  `
}

export const posCenterY = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
  `
}

export const posCenter = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  `
}
