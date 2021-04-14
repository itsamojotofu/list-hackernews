import { IconContext } from 'react-icons'
import { BiUpArrow } from 'react-icons/bi'
import ScrollToTop from 'react-scroll-to-top'

const Scroll = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <IconContext.Provider
          value={{
            style: {
              height: '40',
              width: '40',
              color: '#00BFFF',
            },
          }}
        >
          <BiUpArrow />
        </IconContext.Provider>
      }
      style={{ backgroundColor: '#282c34', boxShadow: '0 0 0 white' }}
    />
  )
}
export default Scroll
