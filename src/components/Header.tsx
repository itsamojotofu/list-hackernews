import styled from 'styled-components'
import logo from './../HN_logo.png'
import './../App.css'

interface Props {
  title: string
}

const HeaderLayout = styled.header`
  background-color: #282c34;
  height: 8vh;
  min-height: 60px;
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: calc(10px + 2vmin);
  color: white;
  border-bottom: 3px double white;
`

const HeaderTitle = styled.h2`
  flex-grow: 1;
`

const Header = ({ title }: Props) => (
  <HeaderLayout>
    <a
      className="App-logo"
      href="https://news.ycombinator.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo} className="App-logo" alt="logo" />
    </a>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderLayout>
)

export default Header
