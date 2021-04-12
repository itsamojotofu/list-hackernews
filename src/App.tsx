import { lazy, Suspense } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Loading from './components/Loader'

// await loading stories for 0.5 seconds to demonstrate the workings of Suspense.
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const Stories = lazy(() =>
  sleep(500).then(() => import('./components/Stories')),
)

const Main = styled.main`
  text-align: center;
  width: 100vw;
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
`

const App = () => {
  return (
    <Main>
      <Header title="HackerNews List" />
      <Container>
        <Suspense fallback={<Loading />}>
          <Stories />
        </Suspense>
      </Container>
    </Main>
  )
}

export default App
