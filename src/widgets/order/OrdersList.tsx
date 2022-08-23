import React from "react";
import Moment from "react-moment";
import { TOrderItemPayload } from "../../core/order/type/payload";
import { orderState } from "./orderState";
import {FaTimes} from 'react-icons/fa'

type OrderListProps = {
  orderList: TOrderItemPayload[];
  manageOrder: (orderItem: TOrderItemPayload) => void
  removeOrder: (orderId: string) => void
};

function OrdersList({ orderList, manageOrder, removeOrder }: OrderListProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Orders</h4>
        </div>
        <div className="card-body">
          <table id="list-orders" className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Cost (N)</th>
                <th>Order Date</th>
                <th>Supplier</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody
              order-list="orders"
              orders-filter="ordersfilter"
              get-status="getStatus(status)"
            >
              {orderList.map((order, key) => (
                <tr key={key} className="order-row">
                  <td>{order.order_group_id}</td>
                  <td>{order.itemName}</td>
                  <td>
                    {order.orderAmount}{" "}
                    <span style={{ color: "grey" }}>@ N{order.orderPrice}</span>
                  </td>
                  <td>{order.orderAmount * order.orderPrice}</td>
                  <td title="{order.orderDate | date:'medium'}">
                    <Moment format="D MMMM YYYY" date={order.orderDate} />
                  </td>
                  <td>
                    {order.orderSupplier.supplierName}
                  </td>
                  <td className="order-status">
                      <button
                        data-toggle="dropdown"
                        className="btn btn-sm  btn-link"
                        onClick={() => manageOrder(order)}
                      >
                        {orderState(order.orderStatus)}
                      </button>
                  </td>
                  <td>
                    <div className="btn-group">
                      <button
                        onClick={() => removeOrder( order._id)}
                        className="btn btn-xs btn-danger"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrdersList;
