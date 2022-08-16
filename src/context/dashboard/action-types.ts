

const SET_ACTIVE_ITEM_SUMMARY = "SET_ACTIVE_ITEM_SUMMARY" 
const CLEAR_ACTIVE_ITEM_SUMMARY = "CLEAR_ACTIVE_ITEM_SUMMARY" 

const SET_SUMMARY_QUICK_ORDER_ITEM = "SET_SUMMARY_QUICK_ORDER_ITEM" 
const CLEAR_SUMMARY_QUICK_ORDER_ITEM = "CLEAR_SUMMARY_QUICK_ORDER_ITEM" 




const actionsList = {
  SET_ACTIVE_ITEM_SUMMARY,
  CLEAR_ACTIVE_ITEM_SUMMARY,
  SET_SUMMARY_QUICK_ORDER_ITEM,
  CLEAR_SUMMARY_QUICK_ORDER_ITEM
}

export type DashboardCartActionList = keyof typeof actionsList

export type DashboardCartActionType = {
  payload?: any,
  type: DashboardCartActionList
}

export default {
  ...actionsList

}
