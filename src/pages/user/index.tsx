import React, { useEffect, useState } from 'react';
import { connect, Dispatch, useRouteMatch } from 'umi';
import { ConnectState } from '@/models/connect';
import { UserModelState } from '@/pages/user/models/user';
import { GlobalModelState } from '@/models/global';
import styles from './style.less';

interface UserProps {
  dispatch: Dispatch;
  loading?: boolean;
  user: UserModelState;
  global: GlobalModelState;
}

const Index: React.FC<UserProps> = props => {
  const { dispatch, loading, user, global } = props;

  useEffect(() => {
    dispatch({
      type: 'global/fetchWxConfig',
      callback: (conf: any) => {
        // @ts-ignore
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          ...conf,
          jsApiList: ['chooseImage'], // 必填，需要使用的JS接口列表
        });
        // @ts-ignore
        wx.ready(function() {
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        });
        // @ts-ignore
        wx.error(function(res: any) {
          console.log('error***********', res);
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
      },
    });
  }, []);

  const handleGetWxConfig = () => {
    // @ts-ignore
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res: any) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        alert(localIds);
      },
    });
  };

  return (
    <div>
      Page user {user.name}
      <div>
        <button onClick={handleGetWxConfig}>get wx config</button>
      </div>
    </div>
  );
};

export default connect(({ global, loading, user }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
  user,
  global,
}))(Index);
