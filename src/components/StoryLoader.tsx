import styled from 'styled-components'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

interface Props {
  width: string
  height: string
  margin: string
}

export const StoryLoader = (props: Props) => {
  const { width, height, margin } = props

  const LoaderContainer = styled.div`
    width: ${width};
    height: ${height};
    margin: ${margin};
  `

  return (
    <LoaderContainer>
      <SkeletonTheme color="#baab70" highlightColor="#c9bc87">
        <Skeleton count={2} height={30} />
      </SkeletonTheme>
    </LoaderContainer>
  )
}

export default StoryLoader
