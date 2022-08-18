import debounce  from "lodash/debounce";
import { useCallback, useState } from "react";
import { ItemsSummaryPanePayload } from "../../../core/items/type/payload";
import { TCartItem } from "../../../core/order/type/cart";
import { TSupplierSummaryPayload } from "../../../core/supplier/type/payload";

type QuickOrderPaneProps = {
  summary: ItemsSummaryPanePayload | null;
  closeQuickOrder: () => void;
  itemId: string | null;
  addItemToCart: (orderItem: TCartItem) => void;
  typeahead: (queryString: string) => Promise<TSupplierSummaryPayload[]>
};

function QuickOrderPane({
  summary,
  closeQuickOrder,
  itemId,
  addItemToCart,
  typeahead
}: QuickOrderPaneProps) {

  const [orderSupplier, setOrderSupplier] = useState({ supplierID: "", supplierName: "" });
  const [supplierName, setSupplierName] = useState("");
  const [orderAmount, setOrderAmount] = useState(0);
  const [suggestedSuppliers, setSuggestedSuppliers] = useState<TSupplierSummaryPayload[] | undefined>([])

  const addToCart = () => {
    if (!itemId || !summary) return
    addItemToCart({
      itemId,
      itemName: summary?.itemName,
      orderDate: new Date().toDateString(),
      orderPrice: summary.itemPurchaseRate,
      orderAmount,
      orderSupplier
    });
  }

  const debouncedSave = useCallback(
    debounce((supplierName) => typeahead(supplierName), 1000),
    []
);

  const suggestSupplier = async (supplierName: string) => {
    setSupplierName(supplierName)
    if(supplierName.length < 2) return
    const suppliersList = await  debouncedSave(supplierName)
    if (suppliersList){
      setSuggestedSuppliers(suppliersList)
    }
  }

  const selectItemSupplier = (supplier: TSupplierSummaryPayload) => {
    setOrderSupplier({
      supplierID: supplier._id,
      supplierName: supplier.supplierName
    })
    setSuggestedSuppliers(undefined)
    setSupplierName("")
  }  

  return (
    summary && itemId ? (
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

                  {/* <label>Current Supplier: <b>{summary.suppliers[0].supplierName}</b></label> */}
                  <div className="typeaheadset mt-3">
                    <label>Change Supplier</label>
                    {
                      orderSupplier.supplierID && (
                        <p>
                            Item Supplier:&nbsp;
                          <strong>
                            {orderSupplier.supplierName}
                          </strong>
                        </p>
                      )
                    }
                    <input
                      type="text"
                      placeholder="Type supplier name."
                      className="form-control"
                      onChange={(e) =>
                        suggestSupplier(e.target.value)
                      }
                      value={supplierName}
                    />
                    {
                      suggestedSuppliers && suggestedSuppliers.length > 0 && (
                        <div className="type-ahead-drop-down">
                          <div className="basic-list-group">
                            <ul className="list-group">
                              {
                                suggestedSuppliers.map((supplier, key) => (
                                  <li onClick={() => selectItemSupplier(supplier)} className="list-group-item list-group-item-action" key={key}>
                                    {supplier.supplierName}
                                  </li>
                                ))
                              }

                            </ul>
                          </div>
                        </div>
                      )
                    }

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
