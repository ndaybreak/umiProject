import React, { useState, useEffect } from 'react'
import { TabBar } from 'antd-mobile'
import { useLocation, history } from 'umi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {ReactComponent as IconHome} from "@/assets/home.svg";
import {ReactComponent as IconHomeActive} from "@/assets/home_green.svg";
import {ReactComponent as IconAd} from "@/assets/basket.svg";
import {ReactComponent as IconAdActive} from "@/assets/basket_green.svg";
import {ReactComponent as IconBall} from "@/assets/ball.svg";
import {ReactComponent as IconBallActive} from "@/assets/ball_green.svg";
import styles from './basic.less'

const PATHMAP = {
  home: '/',
  wx: '/wx',
  user: '/user'
}

export default (props: any) => {
  const { pathname: path } = useLocation()

  return (
    <div  className={styles.wrapper}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="首页"
          key="home"
          icon={<IconHome />}
          selectedIcon={<IconHomeActive />}
          selected={path === PATHMAP.home}
          onPress={() => {
            history.push(PATHMAP.home)
          }}
        >
          {path === PATHMAP.home && props.children}
        </TabBar.Item>
        <TabBar.Item
          icon={<IconAd />}
          selectedIcon={<IconAdActive />}
          title="微信"
          key="wx"
          selected={path === PATHMAP.wx}
          onPress={() => {
            history.push(PATHMAP.wx)
          }}
        >
          {path === PATHMAP.wx && props.children}
        </TabBar.Item>
        <TabBar.Item
          icon={<IconBall />}
          selectedIcon={<IconBallActive />}
          title="我的"
          key="my"
          selected={path === PATHMAP.user}
          onPress={() => {
            history.push(PATHMAP.user)
          }}
        >
          {path === PATHMAP.user && props.children}
        </TabBar.Item>
      </TabBar>
    </div>
  )
}
