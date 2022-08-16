import { OrderCartActionType } from "./action-types";
import { cartState } from "./state";
import produce from "immer";



export function cartReducer(state: typeof cartState, action: OrderCartActionType) {
  switch (action.type) {

    case "FETCH_ORDER_CART_CONTENTS_REQUEST":
      return produce(state, draft => {
        draft.cartItems = [];
      });


    case "FETCH_ORDER_CART_CONTENTS_SUCCESS":
      return produce(state, draft => {
        draft.cartItems = action.payload;
      });


    default:
      return state
  }
}