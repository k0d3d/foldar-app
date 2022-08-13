

const ITEM_SUMMARY_SUCCESS = "ITEM_SUMMARY_SUCCESS"
const ITEM_SUMMARY_ERROR = "ITEM_SUMMARY_ERROR"
const ITEM_SUMMARY_REQUEST = "ITEM_SUMMARY_REQUEST"
const ITEM_SUMMARY_RESET = "ITEM_SUMMARY_RESET"

const SET_ACTIVE_ITEM_SUMMARY = "SET_ACTIVE_ITEM_SUMMARY" 
const CLEAR_ACTIVE_ITEM_SUMMARY = "CLEAR_ACTIVE_ITEM_SUMMARY" 



const actionsList = {
  ITEM_SUMMARY_SUCCESS,
  ITEM_SUMMARY_ERROR,
  ITEM_SUMMARY_REQUEST,
  ITEM_SUMMARY_RESET,
  SET_ACTIVE_ITEM_SUMMARY,
  CLEAR_ACTIVE_ITEM_SUMMARY

}

export type ActionList = keyof typeof actionsList

export type ItemsActionType = {
  payload?: any,
  type: ActionList
}

export default {
  ...actionsList

}
