import React from "react";
import Moment from "react-moment";
import { TOrderItemPayload } from "../../core/order/type/payload";

const orderState = function (num) {
  let returnVal;
  switch (parseInt(num)) {
    case -1:
      returnVal = "cancelled";
      break;
    case 0:
      returnVal = "cart";
      break;
    case 1:
      returnVal = "pending order";
      break;
    case 2:
      returnVal = "received";
      break;
    case 3:
      returnVal = "supplied";
      break;
    case 4:
      returnVal = "paid";
      break;
    case 5:
      returnVal = "complete";
      break;
    default:
      returnVal = "processing";
      break;
  }

  return returnVal;
};

function OrdersList({ orderList }: { orderList: TOrderItemPayload[] }) {
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
                    <Moment date={order.orderDate} />
                  </td>
                  <td>
                    {order.isDrugStocOrder
                      ? "DrugStoc"
                      : order.orderSupplier.supplierName}
                  </td>
                  <td className="order-status">
                    <div
                      order-item-menu="order-item-menu"
                      className="btn-group dropdown"
                    >
                      <a
                        data-toggle="dropdown"
                        className="btn btn-mini btn-nobg"
                      >
                        {orderState(order.orderStatus)}
                      </a>
                      <a
                        data-toggle="dropdown"
                        className="btn btn-dropdown-toggle btn-nobg"
                      >
                        <span className="caret"></span>
                      </a>
                      <div className="dropdown-menu alt-text">
                        <p>
                          Please confirm the following <br />
                          was supplied. <br />
                        </p>
                        <dl>
                          <dt>Item Ordered:</dt>
                          <dd style={{ color: "#3498db" }}>{order.itemName}</dd>
                        </dl>
                        <form className="new-stock-down">
                          <div className="control-group">
                            <label className="control-label">
                              Amount Supplied
                            </label>
                            <div className="controls">
                              <input
                                type="number"
                                ng-model="order.amountSupplied"
                                required={true}
                                className="input-medium input-block-level"
                              />
                              <span className="help-block">
                                {"addHelpText"}
                              </span>
                            </div>
                          </div>
                          <div className="control-group">
                            <label className="control-label">
                              Invoice Number
                            </label>
                            <div className="controls">
                              <input
                                type="text"
                                ng-model="order.orderInvoiceNumber"
                                required={true}
                                className="input-medium input-block-level"
                              />
                              <span className="help-block">
                                {"addHelpText"}
                              </span>
                            </div>
                          </div>
                          <div className="control-group">
                            <label className="control-label">
                              Payment Type
                            </label>
                            <div className="controls">
                              <select
                                ng-model="order.paymentReferenceType"
                                ng-required="order.nextStatus() == 4"
                                className="input-medium input-block-level"
                              >
                                <option>Cheque</option>
                                <option>Cash</option>
                                <option>Bank Transfer</option>
                              </select>
                              <span className="help-block">
                                {"addHelpText"}
                              </span>
                            </div>
                          </div>
                          <div className="control-group">
                            <label className="control-label">
                              Reference ID
                            </label>
                            <div className="controls">
                              <input
                                type="text"
                                ng-model="order.paymentReferenceID"
                                ng-required="order.nextStatus() == 4"
                                placeholder="Cheque No, Cash Slip ID or Transaction ID"
                                className="input-medium input-block-level"
                              />
                              <span className="help-block">{`addHelpText`}</span>
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="controls">
                              <button
                                ng-click="updateOrder()"
                                ng-disabled="order.orderBtnDisabled()"
                                order-item-action-btn="order-item-action-btn"
                                className="btn btn-inverse input-block-level"
                              >{`order.nextStatus() | orderState | uppercase`}</button>
                              <button
                                ng-click="cancelOrder()"
                                ng-disabled="order.nextStatus() == 6"
                                className="btn btn-danger input-block-level"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="btn-group">
                      <a
                        ng-click="removeOrder($event, order._id)"
                        className="btn btn-mini btn-danger"
                      >
                        <i className="icon-remove"></i>
                      </a>
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
