import React from 'react'
import { OrderCartItems } from '../../../widgets/cart/OrderCartItems';


function ListCartPage() {
  return (
    <div className="row">
      <div className="col-md-10 col-lg-8 mx-auto">
        <OrderCartItems></OrderCartItems>

      </div>
    </div>
  )
}

export default ListCartPage