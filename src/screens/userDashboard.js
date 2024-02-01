import React, { useEffect } from 'react'
import { Outlet, NavLink, Link , useLocation} from "react-router-dom";

import { Tab } from '@headlessui/react'
import { UserAuth } from '../context/context'

const UserDashboard = () => {
  const {user} = UserAuth();

useEffect(() => {
  if (user){
    console.log(user)
  }
  else{
    console.log('user')

  }
 

 
}, [user])
    return (
        <Tab.Group vertical>
          <Tab.List className="flex" style={{display:"flex", flexDirection:"column"}}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
            <Link to="/login" className="-m-1.5 p-1.5">
              Content 1
              </Link>
              </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      )
}

export default  UserDashboard;