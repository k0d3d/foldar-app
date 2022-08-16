import { cartReducer } from "../cart/cart-reducer";
import { dashboardReducer } from "../dashboard/dashboard-reducer";


const combineReducers = (...reducers) => 
  (state, action) => 
    reducers.reduce((newState, reducer) =>
         reducer(newState, action), state)

// console.log(combineReducers( dashboardReducer, cartReducer )({},{}))
export const rootReducer = combineReducers(dashboardReducer, cartReducer );
