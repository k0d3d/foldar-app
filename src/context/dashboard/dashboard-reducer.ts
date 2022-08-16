import { DashboardCartActionType } from "./action-types";
import { dashboardState } from "./state";
import produce from "immer";



export function dashboardReducer(state: typeof dashboardState, action: DashboardCartActionType) {
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
        draft.quickCartItem = action.payload;
      });

    case "CLEAR_SUMMARY_QUICK_ORDER_ITEM":
      return produce(state, draft => {
        draft.quickCartItem = null;
      });


    default:
      return state
  }
}