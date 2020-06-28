import React, {useEffect, useState} from "react"
import { Breadcrumb, Input, Row, Col, Button, Pagination, Spin, Modal, notification } from 'antd'
import {  connect, Dispatch, useRouteMatch } from 'umi'
import { ConnectState } from '@/models/connect'
import {UserModelState} from "@/pages/user/models/user";
import styles from './style.less'


interface UserProps {
  dispatch: Dispatch
  loading?: boolean
  user: UserModelState
}

const Index: React.FC<UserProps> = (props) => {
  const { dispatch, loading, user } = props

  useEffect(() => {
  }, [])

  return (
    <Spin spinning={!!loading}>
      Page user {user.name}
    </Spin>
  )
}

export default connect(({ global, loading, user }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
  user
}))(Index)
