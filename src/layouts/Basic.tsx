import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { history } from 'umi'
// @ts-ignore
import { Button, Tab, TabBarItem, Article } from "react-weui"
import 'weui'
import 'react-weui/build/packages/react-weui.css'
import Icon1 from "@/assets/logo_backup.svg";
import Icon2 from "@/assets/step_finished.svg";
import Icon3 from "@/assets/login.svg";
import {ReactComponent as IconHome} from "@/assets/home.svg";


export default (props: any) => {

  const handleMenuClick = (path: string) => {
    debugger
    history.push(path)
  }

  return (
    <Tab type="tabbar">
      <TabBarItem icon={<IconHome />} label="Tab1" onClick={() => handleMenuClick('/home')}>
        1
      </TabBarItem>
      <TabBarItem icon={<img src={Icon2}/>} label="Tab2" active>
        2
      </TabBarItem>
      <TabBarItem icon={<img src={Icon3}/>} label="Tab3" active>
        3
      </TabBarItem>
    </Tab>
  )
}
