import { useEffect, useRef, useState } from 'react'
import generateUniqueId from 'uniqid'
import Draggable from 'react-draggable'
import { globalStyles } from '../styles'

export const DnDWrapper = ({ children, setActiveItem, activeItem, title, style = {} }) => {
  const ref = useRef(null)
  const [uniqueid, setUniqueId] = useState()

  useEffect(() => {
    setUniqueId(generateUniqueId())
  }, [])

  useEffect(() => {
    if (ref?.current) {
      ref.current.style['z-index'] = activeItem === uniqueid ? 2 : 1
    }
  }, [uniqueid, activeItem, setActiveItem])

  const handleStartDrag = () => {
    setActiveItem(uniqueid)
  }

  return (
    <Draggable handle="strong" style={styles.wrapper} onStart={handleStartDrag}>
      <div className="box no-cursor" style={{ ...styles.header, ...style }} ref={ref}>
        <strong className="cursor" style={globalStyles.topBar} ><div>{title}</div></strong>
        {children}
      </div>
    </Draggable>
  )
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    height: 50,
    position: 'absolute',
    resize: 'both',
    overflow: 'auto',
  },
  wrapper: {
    resize: 'both',
    overflow: 'auto',
  }
}
