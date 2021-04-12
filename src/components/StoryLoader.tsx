import styled from 'styled-components'

interface Props {
  width: string
  height: string
  margin: string
}

const StoryLoader = (props: Props) => {
  const { width, height, margin } = props

  const LoaderContainer = styled.div`
    width: ${width};
    height: ${height};
    margin: ${margin};
    color: white;
    font-size: 1.5em;
  `

  return <LoaderContainer>Loading . . .</LoaderContainer>
}

export default StoryLoader
