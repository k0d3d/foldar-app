import { DashboardCartActionType } from "./action-types";


export default function dashboardDispatchHandler (dispatch: React.Dispatch<DashboardCartActionType>) {

  const setActiveSummary = async (payload) => {
    dispatch({
      type: "SET_ACTIVE_ITEM_SUMMARY",
      payload
    })
  }

  const clearActiveSummary = () => {
    dispatch({
      type: "CLEAR_ACTIVE_ITEM_SUMMARY"
    })
  }

  const setQuickOrderItem = async (payload) => {
    dispatch({
      type: "SET_SUMMARY_QUICK_ORDER_ITEM",
      payload
    })
  }

  const clearQuickOrderItem = () => {
    dispatch({
      type: "CLEAR_SUMMARY_QUICK_ORDER_ITEM"
    })
  }

  return {
    setActiveSummary, clearActiveSummary, setQuickOrderItem, clearQuickOrderItem
  }
}