import produce from "immer";
import { ItemsActionType } from './action-constants';
import { State } from './app-defaults';
import { ItemsSummaryPanePayload } from '../../core/items/type/payload';

export function appReducer(state: typeof State, action: ItemsActionType) {
  switch (action.type) {

    case "SET_ACTIVE_ITEM_SUMMARY":
      return produce(state, draft => {
        draft.itemSummary = action.payload as ItemsSummaryPanePayload;
        draft.isLoading = false;
      });

    case "CLEAR_ACTIVE_ITEM_SUMMARY":
      return produce(state, draft => {
        draft.itemSummary = null;
        draft.isLoading = false;
      });


    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
