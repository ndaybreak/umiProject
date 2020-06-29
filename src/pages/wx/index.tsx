import React, {useEffect, useState} from "react"
import { Breadcrumb, Input, Row, Col, Button, Pagination, Spin, Modal, notification } from 'antd'
import {  connect, Dispatch, useRouteMatch } from 'umi'
import {ConnectState} from '@/models/connect'


interface WxProps {
  dispatch: Dispatch
  loading?: boolean
}

const Index: React.FC<WxProps> = (props) => {
  const { dispatch, loading } = props

  useEffect(() => {
    dispatch({
      type: 'global/fetchWxConfig',
      callback: (conf: any) => {
        // @ts-ignore
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          ...conf,
          jsApiList: ['getLocation', 'openLocation'] // 必填，需要使用的JS接口列表
        })
        // @ts-ignore
        wx.ready(function(){
          alert("success")
        })
        // @ts-ignore
        wx.error(function(res: any){
          alert(JSON.stringify(res))
          console.log('error***********', res)
        });
      }
    })
  }, [])

  const handleOpenMap = () => {
    // @ts-ignore
    wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function (res: any) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度

        alert(`${latitude}_${longitude}`)

        // @ts-ignore
        wx.openLocation({
          latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
          longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
          name: '', // 位置名
          address: '', // 地址详情说明
          scale: 15, // 地图缩放级别,整形值,范围从1~28。默认为最大
          infoUrl: 'https://www.baidu.com/' // 在查看位置界面底部显示的超链接,可点击跳转
        });
      }
    });
  }

  return (
    <Spin spinning={!!loading}>
      Page WX
      <div>
        <Button onClick={handleOpenMap}>打开地图</Button>
      </div>
    </Spin>
  )
}

export default connect(({ global, loading, user }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
}))(Index)
