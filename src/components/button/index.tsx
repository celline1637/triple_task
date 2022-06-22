import React from 'react'
import * as S from './style'

interface propsType {
  onClick?: React.MouseEventHandler
  children?: React.ReactNode
  color?: string
  fontWeight?: string
  fullWidth?: boolean
  outline?: boolean
  disabled?: boolean
  size?: number[]
  round?: boolean
  fontSize?: number
}

export const Button = ({ children, onClick, ...rest }: propsType) => {
  return (
    <S.Button onClick={onClick} {...rest}>
      {children}
    </S.Button>
  )
}
