import debounce  from "lodash/debounce";
import { useCallback, useState } from "react";
import { useGetItem } from "../../../core/items/queries/getItem";
import { ItemsSummaryPanePayload } from "../../../core/items/type/payload";
import { TCartItem } from "../../../core/order/type/cart";
import { TSupplierSummaryPayload } from "../../../core/supplier/type/payload";
import SupplierNameTypeAhead from "../../../widgets/supplier/supplierNameTypeAhead";

type QuickOrderPaneProps = {
  initialItemSummary: ItemsSummaryPanePayload | null;
  closeQuickOrder: () => void;
  itemId: string | null;
  addItemToCart: (orderItem: TCartItem) => void;
  typeahead: (queryString: string) => Promise<TSupplierSummaryPayload[]>
};

function QuickOrderPane({
  initialItemSummary,
  closeQuickOrder,
  itemId,
  addItemToCart,
  typeahead
}: QuickOrderPaneProps) {

  const [orderSupplier, setOrderSupplier] = useState({ supplierID: "", supplierName: "" });
  const [orderAmount, setOrderAmount] = useState(0);
  const {data: summary} = useGetItem(initialItemSummary?._id || "")

  const addToCart = () => {
    if (!itemId || !summary) return
    addItemToCart({
      itemId,
      itemName: summary?.itemName,
      orderDate: new Date().toDateString(),
      orderPrice: summary.itemPurchaseRate || 0,
      orderAmount,
      orderSupplier,
      orderItemSize: summary?.itemSize || 0
    });
  }


  const selectItemSupplier = (supplier: TSupplierSummaryPayload) => {
    setOrderSupplier(supplier)
  } 
  

  return (
    summary && itemId ? (
      <div className="chatbox active swing-in-right-fwd ">
        <div className="chatbox-close" />
        <div className="quick-order custom-tab-1">
          <div className="p-3">
            <div className="card mb-1">
              <div className="card-body card-body m-1 p-1">
                <form
                  className="cart-order"
                  role="form"
                  ng-submit="addToCart(summary)"
                  style={{ padding: "5px", position: "relative" }}
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

                  <div className="typeaheadset my-3">
                    <label>Change Supplier</label>
                    <SupplierNameTypeAhead  typeaheadRequest={typeahead} setOrderSupplier={selectItemSupplier} orderSupplier={orderSupplier} />
                  </div>
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
                  onClick={addToCart}
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
      : <></>
  );


}

export default QuickOrderPane;
