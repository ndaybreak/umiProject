import React, {useEffect, useState} from "react"
import {  connect, Dispatch, useRouteMatch } from 'umi'
import { Button } from 'antd-mobile'
import {ConnectState} from '@/models/connect'


interface TestProps {
  dispatch: Dispatch
  loading?: boolean
}

const Index: React.FC<TestProps> = (props) => {
  const { dispatch, loading } = props

  useEffect(() => {
  }, [])

  return (
    <div>
      Page WX
      <div>
        <Button type="primary">打开地图</Button>
      </div>
    </div>
  )
}

export default connect(({ global, loading }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
}))(Index)
