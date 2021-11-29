import React from 'react'
import { DnDWrapper } from '../../components'

export const BrowserApp = (props) => {

  return (
    <DnDWrapper {...props} title="Firefox" style={{ width: 600, height: 500, paddingTop: -200 }}>
      <h1>browser</h1>
    </DnDWrapper>
  )
}