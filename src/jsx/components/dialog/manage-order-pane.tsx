import React, { useState } from 'react'
import { TOrderItemPayload } from '../../../core/order/type/payload';
import { UseMutateOrderCart } from '../../../core/order/usecases/mutate-order';

type ManageOrderPaneProps = {
  initialOrder: TOrderItemPayload
}

function ManageOrderPane({initialOrder}: ManageOrderPaneProps) {

  const [order, setOrder] = useState({
    ...initialOrder,
    amountSupplied: 0,
    orderInvoiceNumber: "",
    paymentReferenceType: "",
    paymentReferenceID: "",
  })

  const nextStatus = function (order) {
    //a Junin order and 'next' status is 'received'
    //should only occur when an order is hasnt been sent
    //to Junin WC online.once the order is 'received' (2)
    //this will have a nextStatus of supplied (3). Till then
    //return 6 or greater, meaning processing
    if (order.isJuninOrder && (order.orderStatus + 1) === 2) {

      return 6;
    }
    //not a Junin order and is still pending(1) , the next
    //status is supplied (3).
    if (!order.isJuninOrder && order.orderStatus === 1) {

      return 3;
    }
    //if none if the above, we should proceed to the next status
    return order.orderStatus + 1;
  };
  
  function cancelOrder(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error('Function not implemented.')
  }

  const updateOrder = async function(){
    if ((nextStatus(order)) === 2) return false;
    if(nextStatus(order) === 3 &&
      (!order.amountSupplied ||
        !order.orderInvoiceNumber)){
      alert('Please check the required fields: Missing Amount / Invoice Number');
      return false;
    }
    if(nextStatus(order) === 4 &&
      (!order.paymentReferenceType ||
        !order.paymentReferenceID)){
      alert('Please check the required fields: Payment ID / Payment Type');
      return false;
    }

    const orderToGo = {...order};
    orderToGo.orderStatus = nextStatus(order);

    const updatePlacedOrder = new UseMutateOrderCart()
    await updatePlacedOrder.updateOrder(orderToGo);
    //   order.orderStatus = nextStatus(order);
    
  };


  // const removeOrder = function(event, order_id){
  //   const currentItem = event.currentTarget;
  //   OS.remove(order_id, function(o){
  //     if(o.state === 1){
  //       $(currentItem).parents('tr').remove();
  //     }
  //   });
  // };
  

  return (
    <div className="chatbox active swing-in-right-fwd ">
      <div className="chatbox-close" />
      <div className="quick-order custom-tab-1">
        <div className="px-3 py-2 alt-text">
          <p className='mt-5'>
            Please confirm the following <br />
            was supplied. <br />
          </p>
          <dl>
            <dt>Item Ordered:</dt>
            <dd style={{ color: "#3498db" }}>{order.itemName}</dd>
          </dl>
          <div className="new-stock-down">
            <div className="control-group">
              <label className="control-label">
                Amount Supplied
              </label>
              <div className="controls">
                <input
                  type="number"
                  value={order.amountSupplied}
                  onChange={(e) => setOrder((order) => ({...order, amountSupplied: parseInt(e.target.value) })) }
                  required={true}
                  className="input-medium form-control"
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
                  value={order.orderInvoiceNumber}
                  onChange={(e) => setOrder((order) => ({...order, orderInvoiceNumber: e.target.value })) }
                  required={true}
                  className="input-medium form-control"
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
                  ng-required="nextStatus(order) == 4"
                  className="default-select  form-control wide"
                  value={order.paymentReferenceType}
                  onChange={(e) => setOrder((order) => ({...order, paymentReferenceType: e.target.value })) }
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
                  ng-required="nextStatus(order) == 4"
                  placeholder="Cheque No, Cash Slip ID or Transaction ID"
                  className="input-medium form-control "
                  value={order.paymentReferenceID}
                  onChange={(e) => setOrder((order) => ({...order, paymentReferenceID: e.target.value })) }
                />
                <span className="help-block">{`addHelpText`}</span>
              </div>
            </div>
            <div className="control-group">
              <div className="controls d-flex justify-content-between">
                <button
                  onClick={() => updateOrder()}
                  ng-disabled="order.orderBtnDisabled()"
                  className="btn btn-success "
                >{`Proceed`}</button>
                <button
                  onClick={() => cancelOrder()}
                  ng-disabled="nextStatus(order) == 6"
                  className="btn btn-outline-danger btn-sm "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageOrderPane

