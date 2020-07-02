import React, { useEffect, useState } from 'react';
import { connect, Dispatch, useRouteMatch, history } from 'umi';
import { Grid, Icon, NavBar, WhiteSpace, WingBlank } from 'antd-mobile';
import { ConnectState } from '@/models/connect';
import { GlobalModelState } from '@/models/global';
import { RecipeModelState } from '@/pages/recipe/models';
import Pic from '@/assets/recipe_pic.jpg';
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
    <div className={styles.detailWrapper}>
      <NavBar
        className={styles.listNav}
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >
        杂骨菌菇汤
      </NavBar>
      <img src={Pic} alt="" style={{ width: '100%', height: 300 }} />
      <WingBlank>
        <p>
          杂骨菌菇汤，里面放了少量的枸杞子，枸杞滋补肝肾、益精明目。平日多喝菌类的汤，可以有效的给身体排毒，清理肠胃。
        </p>
        <p>
          准备食材：排骨100克、金针菇1小把、草菇2个、平菇2个、口蘑2个、枸杞6颗、姜3片、葱1根、料酒2茶匙、盐1茶匙、白胡椒粉少许
        </p>
        <p>步骤1：把菌菇等材料洗净切好，葱洗干净切成葱花。</p>
        <p>步骤2：将菌菇放盐水里泡十分钟，再捞出沥干水分。</p>
        <p>
          步骤3：杂骨用水冲洗干净，焯水后捞出用流动的水冲洗干净。放入锅中，倒入足够量的水，放姜片、料酒，中火煮开后转小火，盖上盖子炖半个小时左右。
        </p>
        <p>
          步骤4：锅里杂骨汤炖的差不多了，开盖，把菌菇和枸杞子放入锅中，盖上盖子继续炖半小时左右。
        </p>
        <p>步骤5：加盐和白胡椒粉调味，撒上葱花就可以了。</p>
      </WingBlank>
    </div>
  );
};

export default connect(({ global, loading, recipe }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
  global,
  recipe,
}))(Month);
