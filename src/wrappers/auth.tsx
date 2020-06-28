import React from 'react'
import { history } from 'umi'

export default (props: any) => {
  const isLogin = true
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    history.replace('/login');
    return <></>
  }
}
