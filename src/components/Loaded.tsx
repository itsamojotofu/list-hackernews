import { IconContext } from 'react-icons'
import { CgLoadbar } from 'react-icons/cg'

const Loaded = () => {
  return (
    <IconContext.Provider
      value={{
        style: {
          height: '100',
          width: '100',
          color: '#00BFFF',
        },
      }}
    >
      <div>
        <CgLoadbar />
      </div>
    </IconContext.Provider>
  )
}

export default Loaded
