import * as React from 'react'
import { useMemo } from 'react'
import { appReducer } from './appReducer'
import { TItemSummaryState, TPendingCartState } from './TPendingCartState'



export const State = {
  itemSummary: null as TItemSummaryState,
  pendingCartItem: null as TPendingCartState,
  errors: null,
  isLoading: false
}
const AppDefaultsContext = React.createContext<any>(undefined)


function AppDefaultsProvider({children}) {
  const [state, dispatch] = React.useReducer(appReducer, State)

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
      type: "SET_QUICK_ORDER_ITEM_SUMMARY",
      payload
    })
  }

  const clearQuickOrderItem = () => {
    dispatch({
      type: "CLEAR_QUICK_ORDER_ITEM_SUMMARY"
    })
  }




  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value =  useMemo(() =>  (
    {
      state, dispatch, setActiveSummary, clearActiveSummary, setQuickOrderItem, clearQuickOrderItem
    }
  ), [state, dispatch, setActiveSummary, clearActiveSummary, setQuickOrderItem, clearQuickOrderItem])

  return <AppDefaultsContext.Provider value={value}>{children}</AppDefaultsContext.Provider>
}

function useAppDefaults() {
  const context = React.useContext(AppDefaultsContext)
  if (context === undefined) {
    throw new Error('useAppDefaults must be used within a AppDefaultsProvider')
  }
  return context
}

export {AppDefaultsProvider, useAppDefaults} 