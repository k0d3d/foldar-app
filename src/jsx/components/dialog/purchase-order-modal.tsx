

import React, { useState } from 'react'
import Moment from 'react-moment'
import { useAppRoot } from '../../../context/app/app-root'
import { TOrderDispatch } from '../../../context/cart/dispatch-handlers'
import { TCartItemsPayload } from '../../../core/order/type/cart'
import { UseMutateOrderCart } from '../../../core/order/usecases/mutate-order'
import { UseListSuppliers } from '../../../core/supplier/usecases/list-suppliers'
import SupplierNameTypeAhead from '../../../widgets/supplier/supplierNameTypeAhead'

type PurchaseOrderModalProps = {
  selectedCart: TCartItemsPayload[]
  clearCart: () => void
}

function PurchaseOrderModal({ clearCart, selectedCart }: PurchaseOrderModalProps) {

  const [printOrderToSupplier, setOrderSupplier] = useState(selectedCart[0].orderSupplier)

  const {suggestSupplierName} = new UseListSuppliers()

  const appRootContext = useAppRoot()
  const { placeOrderToSupplier } = appRootContext.cart as unknown as TOrderDispatch

  const placeOrder = async function () {

    // if (!$scope.check_send_sms && !$scope.check_send_email) {
    //   alert('Please select sms or email to notify supplier');
    //   return false;
    // }

    if (!confirm('Confirm you want to place an order for these items!')) {
      return false;
    }

    if (!selectedCart.length) {
      alert('Please select items you want');
      return false;
    }

    // if ($scope.check_send_sms) {
    //   $scope.sms_purchase_order();
    // }

    // if ($scope.check_send_email) {

    // }
    await placeOrderToSupplier( selectedCart.map(item => ({
      isMainStoreOrder: false,
      itemName: item.itemName,
      orderAmount: item.orderAmount,
      orderDate: item.orderDate,
      orderId: item._id,
      orderSupplier: {
        supplierID: printOrderToSupplier.supplierID,
        supplierName: printOrderToSupplier.supplierName
      },
      supplierName: printOrderToSupplier.supplierName
    })) )

    clearCart()
  };


  function print_purchase_order(elementClass: string): React.MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error('Function not implemented.')
  }



  return (
    <>
      <div
        id="modal-order-supplied"
        data-backdrop="static"
        className="modal show fade alt-text"
      >

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex flex-row justify-content-between">

              <div className='col-md-6 pr-3'>
                <form style={{ marginBottom: 0 }}>
                  <label htmlFor="supplier" className="lister">
                    Change Supplier
                  </label>
                  <div className="pr-3">
                  <SupplierNameTypeAhead orderSupplier={selectedCart[0].orderSupplier} setOrderSupplier={setOrderSupplier} typeaheadRequest={queryString => suggestSupplierName(queryString)} />
                  </div>
                </form>
              </div>
              <div  className='col-md-6'>
                <h5>Notify supplier by</h5>
                <dl className="dl-horizontal">
                  <dt style={{ textAlign: "left" }}>
                    <span>
                      <i className="fa fa-envelope-o "> SMS</i>
                    </span>
                  </dt>
                  <dd>
                    <input
                      type="checkbox"
                      ng-disabled="!printOrderToSupplier.phoneNumber && !printOrderToSupplier.isRequesting"
                      style={{ margin: 0 }}
                      ng-model="check_send_sms"
                    />
                    <span ng-show="sms_is_sent" className="label label-success">
                      Sent
                    </span>
                  </dd>
                  <hr style={{ margin: "3px 0" }} />
                  <dt style={{ textAlign: "left" }}>
                    <span>
                      <i className="fa fa-at"> Email</i>
                    </span>
                  </dt>
                  <dd>
                    <input
                      type="checkbox"
                      ng-disabled="!printOrderToSupplier.email"
                      style={{ margin: 0 }}
                    />
                  </dd>
                </dl>
              </div>
              <div className="clearfix" />
            </div>
            {

            }
            <div
              ng-show="selectedCart.length && printOrderToSupplier"
              className="modal-body purchase-order"
            >
              <h3 style={{ textDecoration: "underline", textAlign: "center" }}>
                Purchase Order
              </h3>
              <address>
                <strong>
                  {printOrderToSupplier.supplierName}
                </strong>
                <br />
                {printOrderToSupplier.address}
                <br />
                {printOrderToSupplier.email}
                <br />
                {printOrderToSupplier.phoneNumber}
                <br />
              </address>
              <div className="date-field">
                <Moment format='DD MMMM YYYY'>
                  {selectedCart[0].orderDate}
                </Moment>
                <div id="print-table-cart" >
                  <table id="list-cart" className="table table-fixed-header">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>UnitPrice (N)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        selectedCart.map((or, key) => (
                          <tr key={key}>
                            <td>
                              {or.itemName}
                            </td>
                            <td>
                              {or.orderAmount}
                            </td>
                            <td>
                              {or.orderPrice}
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={() => clearCart()} className="btn btn-default">
                Back
              </button>
              <button
                ng-class="saveButtonClass"
                onClick={() => print_purchase_order('.purchase-order')}
                disabled={!printOrderToSupplier.supplierID}
                className="btn"
              >
                <i className="fa fa-print"> Print</i>
              </button>
              <button
                onClick={() => placeOrder()}
                disabled={!printOrderToSupplier.supplierID}
                className="btn btn-large pull-right btn-success"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop"></div>
    </>

  )
}

export default PurchaseOrderModal

