import * as React from 'react'
import { useMemo } from 'react'
import cartDispatchHandler from '../cart/dispatch-handlers'
import dashboardDispatchHandler from '../dashboard/dispatch-handlers'
import { rootReducer } from './root-reducer'
import { rootState } from './rootState'

const AppRootContext = React.createContext<any>(undefined)


function AppRootProvider({children}) {
  
  const [state, dispatch] = React.useReducer(rootReducer, rootState)

  const cart = cartDispatchHandler(dispatch)
  const dashboard = dashboardDispatchHandler(dispatch)




  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value =  useMemo(() =>  (
    {
      state, dispatch, cart, dashboard
    }
  ), [state, dispatch, cart, dashboard])

  return <AppRootContext.Provider value={value}>{children}</AppRootContext.Provider>
}

function useAppRoot() {
  const context = React.useContext(AppRootContext)
  if (context === undefined) {
    throw new Error('useAppRoot must be used within a AppRootProvider')
  }
  return context
}

export {AppRootProvider, useAppRoot} 