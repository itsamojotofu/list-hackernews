import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  children: React.ReactNode
}

const HeaderLayout = styled.header`
  background-color: #282c34;
  min-width: 100vw;
  height: 8vh;
  min-height: 50px;
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-size: calc(10px + 2vmin);
  color: white;
  border-bottom: 2px solid white;
  border-bottom: 3px double white;
`

const HeaderTitle = styled.h2`
  flex-grow: 1;
  margin: 10px;
`

const Header = ({ title, children }: Props) => (
  <HeaderLayout>
    {children}
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderLayout>
)

export default Header
