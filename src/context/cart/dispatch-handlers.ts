import { TCartItem } from "../../core/order/type/cart";
import { UseMutateOrderCart } from "../../core/order/usecases/create-order";
import { UseFetchOrderCart } from "../../core/order/usecases/fetch-cart";
import { OrderCartActionType } from "./action-types";


export default function cartDispatchHandler (dispatch: React.Dispatch<OrderCartActionType>) {


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

  const addItemToCart = async (orderItem: TCartItem) => {

    const orderCart = new UseMutateOrderCart()
    await orderCart.saveCartItem(orderItem)
  }


  return {
    fetchOrderCartItems,
    addItemToCart
  }
}

export type TOrderDispatch = ReturnType<typeof cartDispatchHandler>