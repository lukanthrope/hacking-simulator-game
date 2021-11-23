import React from 'react'
import Browser, { Firefox } from 'react-browser-ui'
import { DnDWrapper } from '../../components'

const { Tab, Divider, AddButton } = Firefox

export const BrowserApp = (props) => {
  const tabEnd = (
    <React.Fragment>
      <Divider />
      <AddButton onClick={() => alert('asdfl')} />
    </React.Fragment>
  )
  return (
    <DnDWrapper {...props} title="Firefox" style={{ width: 600, height: 500, paddingTop: -200 }}>
      <Browser
        type={'firefox'}
        showHeader={true}
        activeTabKey={'green'}
        tabEnd={tabEnd}
        style={{ marginTop: -20 }}
      >
        <Tab key={'green'} imageAlt={'green tab image'} title={'Green'} onClose={() => alert('asd')}>
          <div style={{ backgroundColor: 'green', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
        <Tab key={'blue'} imageUrl={''} imageAlt={'blue tab image'} title={'Blue'}>
          <div style={{ backgroundColor: 'blue', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div>
        </Tab>
      </Browser>
    </DnDWrapper>
  )
}