import styled from 'styled-components'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 5px;
`
// Loader for each story
export const StoryLoader = () => {
  return (
    <LoaderContainer>
      <SkeletonTheme color="#baab70" highlightColor="#c9bc87">
        <Skeleton count={2} height={30} />
      </SkeletonTheme>
    </LoaderContainer>
  )
}

export default StoryLoader
