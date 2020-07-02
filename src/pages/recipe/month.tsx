import React, { useEffect, useState } from 'react';
import { connect, Dispatch, useRouteMatch, history } from 'umi';
import { Grid, WhiteSpace } from 'antd-mobile';
import { ConnectState } from '@/models/connect';
import { GlobalModelState } from '@/models/global';
import { RecipeModelState } from '@/pages/recipe/models';
import styles from './index.less';
import { monthData } from './util';

interface UserProps {
  dispatch: Dispatch;
  loading?: boolean;
  global?: GlobalModelState;
  recipe: RecipeModelState;
}

const Month: React.FC<UserProps> = props => {
  const { dispatch, loading, global } = props;

  useEffect(() => {}, []);

  return (
    <div className={styles.monthWrapper}>
      <Grid
        data={monthData}
        columnNum={3}
        hasLine={false}
        renderItem={dataItem => (
          <div>
            <img
              src={dataItem?.icon}
              style={{ width: '60px', maxHeight: '60px', minHeight: '50px' }}
              alt=""
            />
            <div style={{ color: '#111', fontSize: '14px', marginTop: '2px' }}>
              <span>{dataItem?.text}</span>
            </div>
          </div>
        )}
        onClick={(_, index: number) => {
          console.log(index);
          history.push(`/recipe/list/${index}`);
        }}
      />
    </div>
  );
};

export default connect(({ global, loading, recipe }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
  global,
  recipe,
}))(Month);
