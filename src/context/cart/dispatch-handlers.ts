import { UseFetchOrderCart } from "../../core/order/usecases/fetch-cart";
import { OrderCartActionType } from "./action-types";


export default function orderDispatchHandler (dispatch: React.Dispatch<OrderCartActionType>) {


  const fetchOrderCartItems = async () => {
    dispatch({
      type: "FETCH_ORDER_CART_CONTENTS_REQUEST",
    })

    const fetchCart = new UseFetchOrderCart()
    const cartItems = await fetchCart.getCartItems().catch(error => {
      dispatch({
        type: "FETCH_ORDER_CART_CONTENTS_ERROR",
        payload: error
      })
    })

    dispatch({
      type: "FETCH_ORDER_CART_CONTENTS_SUCCESS",
      payload: cartItems
    })

  }

  return {
    fetchOrderCartItems
  }
}

export type TOrderDispatch = ReturnType<typeof orderDispatchHandler>