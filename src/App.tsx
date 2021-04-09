import styled from 'styled-components'
import logo from './HN_logo.png'
import Header from './components/Header'
import './App.css'

const Main = styled.main`
  text-align: center;
  min-width: 100vw;
  min-width: 400px;
`

const Container = styled.section`
  width: 90vw;
  min-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 4000px;
  border: 3px double grey;
  padding: 30px 15px 50px;
  border-radius: 5px;
  background-color: white;
`

function App() {
  return (
    <Main>
      <Header title="HackerNews_List">
        <a
          className="App-logo"
          href="https://news.ycombinator.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </Header>
      <Container>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </Container>
    </Main>
  )
}

export default App
