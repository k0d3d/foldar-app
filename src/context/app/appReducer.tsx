import produce from "immer";
import { ItemsActionType } from './action-constants';
import { State } from './app-defaults';

export function appReducer(state: typeof State, action: ItemsActionType) {
  switch (action.type) {

    case "SET_ACTIVE_ITEM_SUMMARY":
      return produce(state, draft => {
        draft.itemSummary = action.payload;
        draft.isLoading = false;
      });

    case "CLEAR_ACTIVE_ITEM_SUMMARY":
      return produce(state, draft => {
        draft.itemSummary = null;
        draft.isLoading = false;
      });

    case "SET_QUICK_ORDER_ITEM_SUMMARY":
      return produce(state, draft => {
        draft.pendingCartItem = action.payload ;
        draft.isLoading = false;
      });

    case "CLEAR_QUICK_ORDER_ITEM_SUMMARY":
      return produce(state, draft => {
        draft.pendingCartItem = null;
        draft.isLoading = false;
      });


    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
