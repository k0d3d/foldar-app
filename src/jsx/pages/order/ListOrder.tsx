import React, { useState } from 'react'
import { useGetOrders } from '../../../core/order/queries/getOrders'
import useOrderQueries, { OrderQueryNames } from '../../../core/order/queries/queries'
import { TOrderItemPayload } from '../../../core/order/type/payload'
import { UseFetchOrders } from '../../../core/order/usecases/fetch-orders'
import { UseMutateOrderCart } from '../../../core/order/usecases/mutate-order'
import OrdersList from '../../../widgets/order/OrdersList'
import ManageOrderPane from '../../components/dialog/manage-order-pane'
import ListItemsTable from '../../components/item/ListItemsTable'

function ListOrderPage() {

  const [ordersfilter, setOrdersfilter] = useState<any>({})
  const [order, setOrder] = useState<TOrderItemPayload | undefined>()
  
  const query = useGetOrders()

  const removeOrder = async function(order_id){
    const updatePlacedOrder = new UseMutateOrderCart()
    await updatePlacedOrder.removeOrder(order_id);
  };

  return (
    <>
      {
        order && <ManageOrderPane closePane={() => setOrder(undefined)} initialOrder={order} />
      }
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <div className="search-bar">
            <input type="search" value={ordersfilter.itemName} placeholder="Search Item Name" className="input-medium form-control" />
            <input type="search" value={ordersfilter.orderSupplier} placeholder="Search Supplier" className="input-medium form-control" />
            <input type="search" value={ordersfilter.orderInvoiceNumber} placeholder="Search Invoice Number" className="input-medium form-control" />
            <input type="search" value={ordersfilter.order_group_id} placeholder="Search Order ID" className="input-medium form-control" />
            <select value={ordersfilter.orderStatus} className="input-medium form-control">
              <option value=""> All</option>
              <option value="3">Supplied</option>
              <option value="4">Paid</option>
              <option value="1">Pending Order</option>
            </select>
          </div>
        </div>
        <div className="col-md-8 col-lg-9 col-sm-12">
          <div className="row">{
          query.data ? <OrdersList removeOrder={removeOrder} manageOrder={setOrder} orderList={query.data} />: <p>No Data Available</p>
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default ListOrderPage