import {Subscription, Effect, Reducer} from "umi"
import { getSysConfig, getWxConfig } from '@/services/api'

export interface GlobalModelState {
  status?: 'ok' | 'error'
  currentAuthority?: 'user' | 'guest' | 'admin'
}

export interface GlobalModelType {
  namespace: string;
  state: GlobalModelState;
  effects: {
    fetchConfig: Effect;
    fetchWxConfig: Effect;
  };
  reducers: {
    saveConfig: Reducer<GlobalModelState>;
  };
  subscriptions: {
    setup: Subscription
  };
}

const Model: GlobalModelType = {
  namespace: 'global',

  state: {
    status: undefined,
  },

  effects: {
    *fetchConfig(_, { call, put }) {
      const res = yield call(getSysConfig)
      if(res.status === 200) {
        yield put({
          type: 'saveConfig',
          payload: res.data
        })
      }
    },

    *fetchWxConfig({callback}, { call, put }) {
      const res = yield call(getWxConfig)
      if(res.response.status === 200) {
        callback && callback(res.data)
      }
    },
  },

  reducers: {
    saveConfig(state, { payload }) {
      localStorage.setItem("globalConfig",JSON.stringify(payload))
      return {
        ...state,
        config: payload,
      }
    },
  },
  subscriptions: {
    setup({ history }): void {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }): void => {
        // @ts-ignore
        if (typeof window.ga !== 'undefined') {
          // @ts-ignore
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};

export default Model;
