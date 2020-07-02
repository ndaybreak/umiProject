import { Subscription, Effect, Reducer } from 'umi';
import { getSysConfig } from '@/services/api';
import { delay } from '@/utils/utils';
import IconFood1 from '@/assets/food1.png';
import IconFood2 from '@/assets/food2.png';
export interface Recipe {
  title: string;
  desc?: string;
  thumbUrl?: any;
}
export interface RecipeModelState {
  data: { [key: number]: Recipe };
}

export interface RecipeModelType {
  namespace: string;
  state: RecipeModelState;
  effects: {
    fetchData: Effect;
  };
  reducers: {
    saveData: Reducer<RecipeModelState>;
  };
}

let index = 1;
const DefaultData = [
  { title: '糖醋排骨', desc: '营养成分：嘻嘻嘻嘻嘻嘻嘻', thumbUrl: IconFood1 },
  { title: '鱼香肉丝', desc: '配料：嘻嘻嘻嘻嘻嘻嘻', thumbUrl: IconFood2 },
  { title: '青椒炒蛋', desc: '配料：嘻嘻嘻嘻嘻嘻嘻', thumbUrl: IconFood1 },
  { title: '清蒸鲈鱼', desc: '配料：嘻嘻嘻嘻嘻嘻嘻', thumbUrl: IconFood2 },
  { title: '酸辣土豆丝', desc: '配料：嘻嘻嘻嘻嘻嘻嘻', thumbUrl: IconFood2 },
];

const Model: RecipeModelType = {
  namespace: 'recipe',

  state: {
    data: {},
  },

  effects: {
    *fetchData(_, { call, put }) {
      yield delay(400);
      const result: { [key: number]: Recipe } = {};
      for (let i = 0; i < 5; i++) {
        result[index++] = DefaultData[i];
      }
      yield put({
        type: 'saveData',
        payload: result,
      });
    },
  },

  reducers: {
    saveData(state, { payload }) {
      return {
        ...state,
        data: {
          ...state?.data,
          ...payload,
        },
      };
    },
  },
};

export default Model;
