import React, { useEffect, useState } from 'react';
import { connect, Dispatch, useRouteMatch, useParams, history } from 'umi';
import { NavBar, WhiteSpace, Icon, WingBlank, ListView } from 'antd-mobile';
import { ConnectState } from '@/models/connect';
import { UserModelState } from '@/pages/user/models/user';
import { GlobalModelState } from '@/models/global';
import styles from './index.less';
import { RecipeModelState } from '@/pages/recipe/models';
import { monthData } from '@/pages/recipe/util';

interface UserProps {
  dispatch: Dispatch;
  loading?: boolean;
  global?: GlobalModelState;
  recipe: RecipeModelState;
}

const List: React.FC<UserProps> = props => {
  const { dispatch, loading, global } = props;
  const { month } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  const data = new ListView.DataSource({
    rowHasChanged: (row1: any, row2: any) => row1 !== row2,
  });

  const handleOnEndReached = (args: any) => {
    console.log(args);
  };

  const row = (rowData: any, sectionID: any, rowID: any) => {
    return (
      <div key={rowID} style={{ padding: '0 15px' }}>
        <div
          style={{
            lineHeight: '50px',
            color: '#888',
            fontSize: 18,
            borderBottom: '1px solid #F6F6F6',
          }}
        >
          {rowData.title}
        </div>
        <div style={{ display: 'flex', padding: '15px 0' }}>
          <img
            style={{ height: '64px', marginRight: '15px' }}
            src={rowData.img}
            alt=""
          />
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              {rowData.des}
            </div>
            <div>
              <span style={{ fontSize: '30px', color: '#FF6E27' }}>
                {rowID}
              </span>
              ¥
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.listWrapper}>
      <NavBar
        className={styles.listNav}
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >
        {monthData[month].text}
      </NavBar>

      <ListView
        dataSource={data.cloneWithRows({
          1: { title: 'xxxx1', desc: 'yyyyy1' },
          2: { title: 'xxxx2', desc: 'yyyyy1' },
          3: { title: 'xxxx3', desc: 'yyyyy1' },
          4: { title: 'xxxx4', desc: 'yyyyy1' },
        })}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: 'center' }}>
            {isLoading ? 'Loading...' : 'Loaded'}
          </div>
        )}
        renderRow={row}
        useBodyScroll
        pageSize={4}
        onScroll={() => {
          console.log('scroll');
        }}
        scrollRenderAheadDistance={500}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={10}
      />
    </div>
  );
};

export default connect(({ global, loading, recipe }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
  global,
  recipe,
}))(List);
