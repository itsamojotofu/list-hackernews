import React, { lazy, Suspense, useState } from 'react'
import styled from 'styled-components'
import useStories from '../request'
import InfiniteScroll from 'react-infinite-scroller'
import Loading from './Loading'
import Loaded from './Loaded'

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

const Stories = () => {
  const [i, nextLoad] = useState<number>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const LoadLength: number = 20

  // displaying loading animation up to 1 sec before fetching next API response
  const SUSPENSE_CONFIG: any = { timeoutMs: 1000 }
  const [startTransition, isPending] = React.unstable_useTransition(
    SUSPENSE_CONFIG,
  )
  const StoryIds: number[] = useStories(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`,
  )
  const LoadMore = () => {
    startTransition(() => {
      nextLoad((i: number) => i + 1)
    })
    if (i === 23) {
      setHasMore(false)
    }
  }

  return (
    <Main>
      <InfiniteScroll
        loadMore={LoadMore}
        hasMore={hasMore}
        initialLoad={false}
        loader={<div>{isPending ? <Loading /> : <Loaded />}</div>}
      >
        <StoriesContainer>
          {StoryIds.slice(0, (i + 1) * LoadLength).map(
            (id: number, index: number) => (
              <Suspense fallback={<Loading />}>
                <Story index={index + 1} id={id} />
              </Suspense>
            ),
          )}
        </StoriesContainer>
      </InfiniteScroll>
    </Main>
  )
}

export default Stories
