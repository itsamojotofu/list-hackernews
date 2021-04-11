import React from 'react'
import styled from 'styled-components'
import useStories from '../request'
import Story from './Story'

const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoadButton = styled.button`
  width: 130px;
  height: 65px;
  margin: 15px auto;
  color: #4274d3;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.15rem;
  line-height: 65px;
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
    <StoriesContainer>
      {StoryIds.slice(0, (i + 1) * LoadLength).map(
        (id: number, index: number) => (
          <Story index={index + 1} id={id} />
        ),
      )}
      <LoadButton onClick={LoadClick} disabled={isPending}>
        {isPending ? 'Loading ...' : 'Load More'}
      </LoadButton>
    </StoriesContainer>
  )
}

export default Stories
