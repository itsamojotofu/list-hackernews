import styled from 'styled-components'
import Header from './components/Header'
import Stories from './components/Stories'

const Main = styled.main`
  text-align: center;
  width: 100%;
  min-width: 400px;
  min-height: 100vh;
  background-color: #282c34;
`

const Container = styled.section`
  width: 60vw;
  min-width: 400px;
  margin: 10px auto;
  overflow: auto;
  padding: 30px;
  background-color: #282c34;
  @media (max-width: 1024px) {
    width: 80vw;
  }
  @media (max-width: 599px) {
    width: 90vw;
    font-size: 0.8em;
  }
`

const App = () => {
  return (
    <Main>
      <Header title="HackerNews List" />
      <Container>
        <Stories />
      </Container>
    </Main>
  )
}

export default App
