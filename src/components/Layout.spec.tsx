import * as React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'

import { DisconnectedModal } from '../sse/containers/DisconnectedModal'
import { IProps, Layout } from './Layout'

describe('<Layout />', () => {
  let wrapper: ShallowWrapper<IProps, {}>

  beforeEach(() => {
    const title = 'My title'
    const sidebar = <div>SideBar</div>
    const main = <div>MainContent</div>
    wrapper = shallow(<Layout title={title} sidebar={sidebar} main={main} />)
  })

  it('should contain DisconnectedModal component', () => {
    expect(wrapper.contains(<DisconnectedModal />)).toBeTruthy()
  })
})
