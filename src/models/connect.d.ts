import { GlobalModelState } from './global';
import { UserModelState } from '@/pages/user/models/user';
import { RecipeModelState } from '@/pages/recipe/models';

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
  recipe: RecipeModelState;
}
