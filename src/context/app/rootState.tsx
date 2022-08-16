import { cartState } from '../cart/state';
import { dashboardState } from '../dashboard/state';


export const rootState = {
  ...dashboardState,
  ...cartState,
  errors: null,
  isLoading: false
};

export type TRootState = typeof rootState