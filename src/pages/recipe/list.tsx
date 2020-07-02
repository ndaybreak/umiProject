import React, { useEffect, useState } from 'react';
import { connect, Dispatch, useRouteMatch, useParams, history } from 'umi';
import { NavBar, WhiteSpace, Icon, WingBlank, ListView } from 'antd-mobile';
import { ConnectState } from '@/models/connect';
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
  const { dispatch, loading, global, recipe } = props;
  const { month } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const loadData = () => {
    setIsLoading(true);
    dispatch({
      type: 'recipe/fetchData',
      callback: () => {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1: any, row2: any) => row1 !== row2,
  });

  const handleOnEndReached = (args: any) => {
    loadData();
  };

  const handleShowDetail = (rowID: number) => {
    history.push('/recipe/detail');
  };

  const row = (rowData: any, sectionID: any, rowID: any) => {
    return (
      <div
        key={rowID}
        style={{ padding: '0 15px' }}
        onClick={() => handleShowDetail(rowID)}
      >
        <div style={{ display: 'flex', padding: '15px 0' }}>
          <img
            style={{ width: 120, maxHeight: 100, marginRight: 15 }}
            src={rowData.thumbUrl}
            alt=""
          />
          <div style={{ lineHeight: 1 }}>
            <div
              style={{ margin: '5px 0 8px', fontSize: '16px', color: '#333' }}
            >
              {rowData.title}
            </div>
            <div style={{ color: '#666' }}>{rowData.desc}</div>
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
        dataSource={dataSource.cloneWithRows(recipe.data)}
        renderFooter={() => (
          <div style={{ padding: 10, textAlign: 'center' }}>
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
