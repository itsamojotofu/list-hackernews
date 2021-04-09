import styled from 'styled-components'
import Header from './components/Header'

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
      <Header title="HackerNews_List" />
      <Container>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </Container>
    </Main>
  )
}

export default App
