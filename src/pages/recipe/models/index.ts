import { Subscription, Effect, Reducer } from 'umi';
import { getSysConfig } from '@/services/api';

export interface RecipeModelState {
  name?: string;
}

export interface RecipeModelType {
  namespace: string;
  state: RecipeModelState;
  effects: {
    // fetchConfig: Effect;
  };
  reducers: {
    // saveConfig: Reducer<UserModelState>;
  };
}

const Model: RecipeModelType = {
  namespace: 'recipe',

  state: {
    name: 'xiao',
  },

  effects: {
    // *fetchConfig(_, { call, put }) {
    //   const res = yield call(getSysConfig)
    //   if(res.status === 200) {
    //     yield put({
    //       type: 'saveConfig',
    //       payload: res.data
    //     })
    //   }
    // },
  },

  reducers: {
    // saveConfig(state, { payload }) {
    //
    //   localStorage.setItem("globalConfig",JSON.stringify(payload))
    //
    //   return {
    //     ...state,
    //     config: payload,
    //   }
    // },
  },
};

export default Model;
