import styled from 'styled-components/macro'

export const Logo = styled.div`
  ${({ theme }) => theme.flexSet()};
  font-size: 1.3rem;
  font-weight: 700;
`

export const Nav = styled.nav`
  margin-left: auto;
`

export const Menu = styled.ul`
  display: flex;
  gap: 0.4rem;
`

export const Link = styled.li`
  padding: 10px 17px;
  & > a {
    color: ${({ theme }) => theme.colors.black};
  }
`
