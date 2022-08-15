import { useState } from "react";
import { TPendingCartState } from "../../../context/app/TPendingCartState";
import { ItemsSummaryPanePayload } from "../../../core/items/type/payload";

function QuickOrderPane({
  summary,
  closeQuickOrder,
  quickOrder
}: {
  summary: ItemsSummaryPanePayload | null;
  closeQuickOrder: () => void;
  quickOrder: TPendingCartState

}) {
  const [orderSupplier, setOrderSupplier] = useState({ supplierName: "" });
  const [orderAmount, setOrderAmount] = useState(0);

  return (
    summary && quickOrder && (
      <div className="chatbox active swing-in-right-fwd ">
        <div className="chatbox-close" />
        <div className="quick-order custom-tab-1">
          <div className="p-3">
            <div className="card">
              <div className="card-body">
                <form
                  className="cart-order"
                  role="form"
                  ng-submit="addToCart(summary)"
                  style={{ padding: "5px" }}
                  name="cartorder"
                >
                  <label>Quantity</label>
                  <input
                    type="number"
                    value={orderAmount}
                    onChange={(e) => setOrderAmount(parseInt(e.target.value))}
                    className="form-control"
                    required={true}
                  />

                  {/* <label>Current Supplier: <b>{summary.suppliers[0].supplierName}</b></label> */}
                  <label>Change Supplier</label>
                  <input
                    type="text"
                    placeholder="Supplier"
                    className="form-control"
                    onChange={(e) =>
                      setOrderSupplier({ supplierName: e.target.value })
                    }
                    value={orderSupplier.supplierName}
                  />
                </form>
              </div>
            </div>
            <div className="summary-actions">
              <p>
                <button
                  className="btn btn-warning btn-block"
                  type="submit"
                  ng-disabled="cartorder.$invalid"
                  ng-click="summary.supplierSelected = 'user_entry'"
                >
                  Add to Cart
                </button>
              </p>
              <p>
                <button
                  className="btn btn-sm btn-block btn-link"
                  onClick={() => closeQuickOrder()}
                >
                  Cancel
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default QuickOrderPane;
