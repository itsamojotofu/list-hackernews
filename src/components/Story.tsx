import React, { memo } from 'react'
import styled from 'styled-components'
import StoryLoader from './StoryLoader'
import { IconContext } from 'react-icons'
import { RiExternalLinkLine } from 'react-icons/ri'

const StoryContainer = styled.div`
  width: 100%;
  color: white;
  background-color: #286aa6;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding: 15px 20px 5px 5px;
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

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 0;
`

const StoryInfo = styled.div`
  width: calc(100% - 50px);
  font-size: 1em;
  background-color: #afa16a;
  margin-bottom: 10px;
  padding: 3px 0 3px 10px;
`

const LinkedIcon = styled.a`
  color: white;
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    color: #282c34;
    text-decoration: inherit;
  }
`

const Adjuster = styled.div`
  border-bottom: 10px solid #286aa6;
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

// converting timestamp to formatted Unix time
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
  const merigian = HH % 12 === 0 ? 12 : HH % 12

  return ` ${merigian}:${mm} ${ampm} - ${dd} ${month_name[MM]}, ${yyyy}`
}

const Story = memo((props: Props) => {
  const { index, id } = props
  const [story, setStory] = React.useState<StoryData | null>(null)

  // loading a story one by one with its id passed from top stories API
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
  }, [id])

  return (
    <StoryContainer>
      <StoryIndex>{index}</StoryIndex>
      {story ? (
        <StoryBody>
          {/* conditional to remove anchor when url is blank */}
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
          <SecondRow>
            <StoryInfo>
              {'By '}
              {story.by}
              {' | '} {timestampConversion(story.time)}
            </StoryInfo>
            {/* conditional to remove anchor when url is blank */}
            {story.url !== '' ? (
              <IconContext.Provider
                value={{
                  style: {
                    width: '50',
                    fontSize: '2.5em',
                    padding: '0 0 5px',
                  },
                }}
              >
                <div>
                  <LinkedIcon
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiExternalLinkLine />
                  </LinkedIcon>
                </div>
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{
                  style: {
                    width: '50',
                    fontSize: '2.5em',
                    padding: '0 0 5px',
                  },
                }}
              >
                <div>
                  <RiExternalLinkLine />
                </div>
              </IconContext.Provider>
            )}
          </SecondRow>
        </StoryBody>
      ) : (
        <StoryBody>
          <StoryLoader />
          <Adjuster />
        </StoryBody>
      )}
    </StoryContainer>
  )
})

export default Story
