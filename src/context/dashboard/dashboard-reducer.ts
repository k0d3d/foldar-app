import { DashboardActionType } from "./action-types";
import { dashboardState } from "./state";
import produce from "immer";



export function dashboardReducer(state: typeof dashboardState, action: DashboardActionType) {
  switch (action.type) {

    case "SET_ACTIVE_ITEM_SUMMARY":
      return produce(state, draft => {
        draft.itemSummary = action.payload;
      });

    case "CLEAR_ACTIVE_ITEM_SUMMARY":
      return produce(state, draft => {
        draft.itemSummary = null;
      });

    case "SET_SUMMARY_QUICK_ORDER_ITEM":
      return produce(state, draft => {

        draft.quickCartItem = {
          itemId: action.payload.itemId,
          orderAmount: action.payload.orderAmount,
          orderSupplier: action.payload.orderSupplier
        };
      });

    case "CLEAR_SUMMARY_QUICK_ORDER_ITEM":
      return produce(state, draft => {
        draft.quickCartItem = null;
      });


    default:
      return state
  }
}