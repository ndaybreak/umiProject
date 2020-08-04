import React, { useEffect, useState } from 'react';
import { connect, Dispatch, useRouteMatch } from 'umi';
import { Button, SearchBar } from 'antd-mobile';
import { ConnectState } from '@/models/connect';
import styles from './index.less';

interface TestProps {
  dispatch: Dispatch;
  loading?: boolean;
}

const Index: React.FC<TestProps> = props => {
  const { dispatch, loading } = props;
  const [value, setValue] = useState('');
  const [str, setStr] = useState('');

  useEffect(() => {}, []);

  return (
    <div className={styles.wrapper}>
      Page WX
      <div>
        <Button>打开地图</Button>
      </div>
      <SearchBar
        value={value}
        placeholder="请输入商品名/药品通用名"
        onSubmit={value => setStr(value)}
        onClear={value => console.log(value, 'onClear')}
        onCancel={() => setValue('')}
        onChange={val => setValue(val)}
      />
    </div>
  );
};

export default connect(({ global, loading }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
}))(Index);
