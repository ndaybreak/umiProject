import { GlobalModelState } from './global'
import {UserModelState} from "@/pages/user/models/user";
export { GlobalModelState }

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
    audit?: boolean;
    product?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  user: UserModelState;
}
