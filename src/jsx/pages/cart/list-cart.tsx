import React, { useState } from 'react'
import { TCartItemsPayload } from '../../../core/order/type/cart';
import { OrderCartItems } from '../../../widgets/cart/OrderCartItems';
import PurchaseOrderModal from '../../components/dialog/purchase-order-modal';


function ListCartPage() {

  const [selectedCart, selectCart] = useState<TCartItemsPayload[]>([] as TCartItemsPayload[])

  const clearCart = () => selectCart([])

  return (
    <>
    {
      selectedCart.length > 0 && <PurchaseOrderModal clearCart={clearCart} selectedCart={selectedCart} />
    }
    <div className="row">
      <div className="col-md-10 col-lg-8 mx-auto">
        <OrderCartItems placeOrderToSupplier={selectCart} />

      </div>
    </div>
    </>
  )
}

export default ListCartPage