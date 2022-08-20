import { TCartItem } from "../../core/order/type/cart";
import { UseMutateOrderCart } from "../../core/order/usecases/mutate-order";
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
    await fetchOrderCartItems()
  }
  
  const placeOrderToSupplier = async (suppierOrder) => {
    const placeOrder = new UseMutateOrderCart()
    await placeOrder.placeSupplierOrder(suppierOrder)
    await fetchOrderCartItems()
  }

  const removeOrder = async function (order_id) {
    const updatePlacedOrder = new UseMutateOrderCart()
    await updatePlacedOrder.removeOrder(order_id);
    await fetchOrderCartItems()

  };

  return {
    fetchOrderCartItems,
    addItemToCart,
    placeOrderToSupplier,
    removeOrder
  }
}

export type TOrderDispatch = ReturnType<typeof cartDispatchHandler>