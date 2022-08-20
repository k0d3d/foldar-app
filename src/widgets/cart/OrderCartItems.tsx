import groupBy from "lodash/groupBy";
import React, { useEffect } from "react";
import Moment from "react-moment";
import { useAppRoot } from "../../context/app/app-root";
import { TRootState } from "../../context/app/rootState";
import { TOrderDispatch } from "../../context/cart/dispatch-handlers";
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { UseMutateOrderCart } from "../../core/order/usecases/mutate-order";
import { FaTimes } from 'react-icons/fa'


export function OrderCartItems({ placeOrderToSupplier: selectCart }) {
  const appRootContext = useAppRoot();

  const { fetchOrderCartItems, removeOrder } =
    appRootContext.cart as unknown as TOrderDispatch;
  const { cartItems } = appRootContext.state as unknown as TRootState;

  const groupedCartItems = groupBy(cartItems, (item) => item.orderSupplier.supplierName)
  useEffect(() => {
    fetchOrderCartItems();
  }, []);




  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Order Cart</h4>
      </div>
      <div className="card-body">
        {
          cartItems && cartItems.length > 0 ?
            (<>
              {
                Object.keys(groupedCartItems).map((supplierName, key) => {
                  return (
                    <div className="table-responsive" key={key}>

                      <div className="d-flex flex-row">
                        <div className="p-1 mr-2">
                          <button onClick={() => selectCart(groupedCartItems[supplierName])} type="button" className="btn btn-outline-success btn-xs">
                            <span className="d-inline">
                              <MdOutlineAddShoppingCart />
                            </span>
                          </button>
                        </div>
                        <div className="ml-2">
                          <p className="mb-0">
                            <strong>
                              <a onClick={() => selectCart(groupedCartItems[supplierName])}>
                                {supplierName}
                              </a>
                            </strong>
                          </p>
                          <span className="help-text">Complete order from this supplier</span>
                        </div>
                      </div>
                      <table className="table table-responsive-md" key={key}>
                        <thead>
                          <tr>
                            <th
                              style={{
                                width: 50,
                              }}
                            >
                              <div className="form-check custom-checkbox checkbox-success check-lg me-3"></div>
                            </th>
                            <th>
                              <strong>ITEM</strong>
                            </th>
                            <th>
                              <strong>QUANTITY</strong>
                            </th>
                            <th>
                              <strong>UNIT PRICE ()</strong>
                            </th>
                            <th>
                              <strong>ORDER DATE</strong>
                            </th>
                            <th>
                              <strong>SUPPLIER</strong>
                            </th>
                            <th>
                              <strong />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {groupedCartItems[supplierName].map((item, key) => (
                            <tr key={key}>
                              <td>
                                <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="customCheckBox2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="customCheckBox2"
                                  />
                                </div>
                              </td>

                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="images/avatar/1.jpg"
                                    className="rounded-lg me-2"
                                    width={24}
                                    alt=""
                                  />{" "}
                                  <span className="w-space-no">{item.itemName}</span>
                                </div>
                              </td>
                              <td>
                                <strong>{item.orderAmount}</strong>
                              </td>
                              <td>{item.orderPrice}</td>
                              <td>
                                <Moment calendar>{item.orderDate}</Moment>
                              </td>
                              <td>{item.orderSupplier.supplierName}</td>
                              <td>
                                <button
                                  onClick={() => removeOrder(item._id)}
                                  className="btn btn-xs btn-danger"
                                >
                                  <FaTimes />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                    </div>
                  )
                })
              }
            </>
            ) :
            (<h5 className="text-center">No Data Available</h5>)
        }

      </div>
    </div>
  );
}
