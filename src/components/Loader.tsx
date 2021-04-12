import Loader from 'react-loader-spinner'

const Loading = () => {
  return (
    <Loader
      type="Circles"
      color="#00BFFF"
      margin-top={200}
      height={200}
      width={200}
      timeout={2000}
    />
  )
}

export default Loading
