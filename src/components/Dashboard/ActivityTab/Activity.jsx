import React from 'react'
import { ActivityTab, Topbar , ActivityNav , Filter ,NavList, NavItem} from '../../../styles/DashboardElements'
const Activity = () => {
  return (
    <ActivityTab>
      <Topbar>
        <ActivityNav>
          <NavList>
            <NavItem to="/"> Activity</NavItem>
            <NavItem to="/">Clicks</NavItem>
            <NavItem  to ="/">Sales</NavItem>
          </NavList>
        </ActivityNav>
        <Filter >
          <option>Week</option>
        </Filter>
      </Topbar>
    </ActivityTab>
  )
}

export default Activity