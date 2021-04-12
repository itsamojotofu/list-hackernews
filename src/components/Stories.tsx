import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import useStories from '../request'
// import Story from './Story'
import Loading from './Loader'

// await loading stories for 0.5 seconds to make the workings of Suspense be visible.
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const Story = lazy(() => sleep(500).then(() => import('./Story')))

const Main = styled.main`
  text-align: center;
  background-color: #282c34;
`

const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const LoadButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 15px auto;
  color: #286aa6;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.15em;
  line-height: 50px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  cursor: pointer;
`

const Stories = () => {
  const LoadLength: number = 100
  const [i, nextLoad] = React.useState<number>(0)
  const StoryIds: number[] = useStories(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`,
  )
  const LoadClick = () => {
    startTransition(() => {
      nextLoad((i: number) => i + 1)
    })
  }
  const SUSPENSE_CONFIG: any = { timeoutMs: 2000 }
  const [startTransition, isPending] = React.unstable_useTransition(
    SUSPENSE_CONFIG,
  )

  return (
    <Main>
      <StoriesContainer>
        {StoryIds.slice(0, (i + 1) * LoadLength).map(
          (id: number, index: number) => (
            <Suspense fallback={<Loading />}>
              <Story index={index + 1} id={id} />
            </Suspense>
          ),
        )}
      </StoriesContainer>
      <LoadButton onClick={LoadClick} disabled={isPending}>
        {isPending ? 'Loading ...' : 'Load More'}
      </LoadButton>
    </Main>
  )
}

export default Stories
