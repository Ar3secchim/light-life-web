import { Tabs, TabsList } from './TabsComponents'

import {
  AvatarIcon,
  CalendarIcon,
  FileTextIcon,
  HomeIcon,
} from '@radix-ui/react-icons'

function NavBar() {
  return (
    <Tabs>
      <TabsList routes={'/user'}>
        <HomeIcon />
        Menu
      </TabsList>
      <TabsList routes={''}>
        <FileTextIcon />
        Taks
      </TabsList>
      <TabsList routes={'calendar'}>
        <CalendarIcon /> Calendar
      </TabsList>
      <TabsList routes={''}>
        <AvatarIcon /> User
      </TabsList>
    </Tabs>
  )
}

export default NavBar
