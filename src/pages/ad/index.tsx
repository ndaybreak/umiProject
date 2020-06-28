import React from 'react';
import { connect } from 'umi';
import styles from './index.less'
import { ReactComponent as Logo } from '@/assets/logo.svg'

export default (props: any) => {
  console.log(props)
  return (
    <div style={{height: '600px'}}>
      {/* 用户离开页面时提示一个选择 */}
      <img src={require('@/assets/login.svg')} alt="" style={{width: 200}}/>
      <Logo width={90} />
      <h1 className={styles.title}>Page ad</h1>
    </div>
  );
}
