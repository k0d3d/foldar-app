import React, { useState } from 'react'
import useOrderQueries, { OrderQueryNames } from '../../../core/order/queries/queries'
import { UseFetchOrders } from '../../../core/order/usecases/fetch-orders'
import OrdersList from '../../../widgets/order/OrdersList'
import ListItemsTable from '../../components/item/ListItemsTable'

function ListOrderPage() {

  const [ordersfilter, setOrdersfilter] = useState<any>({})

  const request = new UseFetchOrders()
  
  const query = useOrderQueries({ queryName: OrderQueryNames.orders,  handler: request.getOrders.bind(request) })

  return (
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
      <div className="col-md-7 col-lg-8 col-sm-12">
        <div className="row">{
        query.data ? <OrdersList orderList={query.data} />: <p>No Data Available</p>
        }
        </div>
      </div>
    </div>
  )
}

export default ListOrderPage