import groupBy from "lodash/groupBy";
import React, { useEffect } from "react";
import Moment from "react-moment";
import { useAppRoot } from "../../context/app/app-root";
import { TRootState } from "../../context/app/rootState";
import { TOrderDispatch } from "../../context/cart/dispatch-handlers";
import { MdOutlineAddShoppingCart } from 'react-icons/md'

export function OrderCartItems({placeOrderToSupplier: selectCart}) {
  const appRootContext = useAppRoot();

  const { fetchOrderCartItems } =
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
        <div className="table-responsive">
          {
            Object.keys(groupedCartItems).map((supplierName, key) => {
              return (
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
                    <tr>
                      <td>
                        <button onClick={() => selectCart(groupedCartItems[supplierName])} type="button" className="btn btn-outline-success btn-xs">
                          <span className="d-inline">
                            <MdOutlineAddShoppingCart />
                          </span>
                        </button>
                      </td>
                      <td>
                        <p className="mb-0">
                          <strong>
                            <a onClick={() => selectCart(groupedCartItems[supplierName])}>
                            {supplierName}
                            </a>
                            </strong>
                        </p>
                        <span className="help-text">Complete order from this supplier</span>
                      </td>
                    </tr>
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
                          <div className="d-flex">
                            <a
                              href="#"
                              className="btn btn-danger shadow btn-xs sharp"
                            >
                              <i className="fa fa-trash" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}
