import React from 'react'
import styled from 'styled-components'
import StoryLoader from './StoryLoader'

const StoryContainer = styled.div`
  width: 100%;
  color: white;
  background-color: #286aa6;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding: 15px 20px 10px 5px;
`

const StoryIndex = styled.span`
  margin: 0 10px 0 3px;
  font-size: 1em;
  text-align: center;
  min-width: 25px;
`
const StoryBody = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`
const StoryTitle = styled.a`
  color: white;
  background-color: #afa16a;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 500;
  padding: 3px 0 3px 10px;
`

const StoryTitleURL = styled.span`
  font-size: 0.8em;
  color: #dddddd;
  &:hover {
    text-decoration: underline;
  }
`

const StoryInfo = styled.div`
  width: calc(100% - 50px);
  font-size: 1em;
  background-color: #afa16a;
  margin-top: 10px;
  padding: 3px 0 3px 10px;
`

export interface StoryData {
  id: number
  title: string
  by: string
  url: string
  time: number
}

interface Props {
  id: number
  index: number
}

const timestampConversion = (stamp: number) => {
  const date = new Date(stamp * 1000)
  const yyyy = `${date.getFullYear()}`
  const MM: number = Number(`0${date.getMonth()}`.slice(-2))
  const dd = `0${date.getDate()}`.slice(-2)
  const HH = Number(`0${date.getHours()}`.slice(-2))
  const mm = `0${date.getMinutes()}`.slice(-2)

  const month_name = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  const ampm = HH < 12 ? 'AM' : 'PM'
  const merigian = HH % 12 == 0 ? 12 : HH % 12

  return ` ${merigian}:${mm} ${ampm} - ${dd} ${month_name[MM]}, ${yyyy}`
}

const Story = (props: Props) => {
  const { index, id } = props
  const [story, setStory] = React.useState<StoryData | null>(null)

  React.useEffect(() => {
    const fetchStory = async (id: number) => {
      const response: Response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
      )
      const Response: any = await response.json()

      setStory({
        id: Response.id || -1,
        title: Response.title || '',
        by: Response.by || '',
        url: Response.url || '',
        time: Response.time || 0,
      })
    }

    fetchStory(id)
  }, [])

  return (
    <StoryContainer>
      <StoryIndex>{index}</StoryIndex>
      {story ? (
        <StoryBody>
          {story.url !== '' ? (
            <StoryTitle
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {story.title}{' '}
              <StoryTitleURL>({story.url.split('/')[2]})</StoryTitleURL>
            </StoryTitle>
          ) : (
            <StoryTitle>{story.title}</StoryTitle>
          )}
          <StoryInfo>
            {'By '}
            {story.by}
            {' | '} {timestampConversion(story.time)}
          </StoryInfo>
        </StoryBody>
      ) : (
        <StoryLoader width="100%" height="100%" margin="0 auto 5px" />
      )}
    </StoryContainer>
  )
}

export default Story
