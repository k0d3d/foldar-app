import * as React from 'react'
import { useMemo } from 'react'
import { ItemsSummaryPanePayload } from '../../core/items/type/payload'
import { appReducer } from './appReducer'





type TItemSummaryState = ItemsSummaryPanePayload | null

export const State = {
  itemSummary: null as TItemSummaryState,
  errors: null,
  isLoading: false
}
const AppDefaultsContext = React.createContext<any>(undefined)


function AppDefaultsProvider({children}) {
  const [state, dispatch] = React.useReducer(appReducer, State)
  // const [activeSummary, setActiveSummary] = useState<ItemsSummaryPanePayload | null>(null)


  // React.useEffect(() => {
  //   getAllProductCategories()
  // }, [])

  const setActiveSummary = (payload) => {
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




  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value =  useMemo(() =>  (
    {
      state, dispatch, setActiveSummary, clearActiveSummary
    }
  ), [state, dispatch, setActiveSummary, clearActiveSummary])

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