import React from 'react'
import styled from 'styled-components'
import instance from './../axios'

// interface Props {
// }

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Title = styled.div`
  font-size: 20px:
  flex-wrap: align-self: center;
  flex: 1;
`

interface Story {
  id: number
  title: string
  by: string
  url: string
  time: string
  kids: []
}

const fetchTopStories = async (count: number): Promise<Story[]> => {
  const ids = await instance
    .get(`/topstories.json?print=pretty`)
    .then((res: { json: () => any }) => res.json())
  const stories: any = await Promise.all(
    ids.slice(0, count).map(
      async (id: number): Promise<Story> => {
        const story: Story = await instance
          .get(`/${id}.json?print=pretty`)
          .then((res: { json: () => any }) => res.json())
        return story
      },
    ),
  )
  console.group(stories)
  return stories
}

export const Story = React.memo((props: Story) => {
  const { title, by, time } = props
  // const [startTransition, isPending] = React.useTransition({
  //   timeoutMs: 2000
  // });

  return (
    <Row>
      <Title>{title}</Title>
      <Title>{by}</Title>
      <Title>{time}</Title>
    </Row>
  )
})
