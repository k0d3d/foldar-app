import { Link } from "react-router-dom";
import { useAppRoot } from "../../../context/app/app-root";
import { TPendingCartState } from "../../../context/app/TPendingCartState";
import { TOrderDispatch } from "../../../context/cart/dispatch-handlers";
import { ItemsSummaryPanePayload } from "../../../core/items/type/payload";

import { IoListOutline } from 'react-icons/io5'
import { FiShoppingCart } from 'react-icons/fi'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineBubbleChart, MdOutlinePointOfSale, MdOutlineAccountBox, MdOutlineHistoryToggleOff } from 'react-icons/md'

import SummaryNavigationPills from "../../../widgets/home/SummaryNav";
import ItemsSummaryTable from "../../../widgets/items/ItemsSummaryTable";
import ItemSummaryPane from "../dialog/item-summary-pane";
import QuickOrderPane from "../dialog/quick-order-pane";
import ListSuppliersTable from "../../../widgets/supplier/list-suppliers";
import { useState } from "react";
import { UseListItems } from "../../../core/items/usecases/list-items";
import { UseListSuppliers } from "../../../core/supplier/usecases/list-suppliers";

function Home() {
  const [currentPill, setPill] = useState("items")

  const { state, dashboard, cart } = useAppRoot();
  const { clearActiveSummary, setQuickOrderItem, clearQuickOrderItem } =
    dashboard;
  const activeSummary = state.itemSummary as ItemsSummaryPanePayload;
  const quickOrder = state.quickCartItem as TPendingCartState;
  const { addItemToCart } = cart as unknown as TOrderDispatch;

  const suppliersReq = new UseListSuppliers()

  const afterPlacedOrderCallback = () => {
    clearQuickOrderItem()
    clearActiveSummary()
  }

  const handleAddItemToCart = async (cartData) => {
    await addItemToCart(cartData)
    afterPlacedOrderCallback()
  }

  return (
    <>
      {
        activeSummary && (
          <ItemSummaryPane
            openQuickOrderPane={setQuickOrderItem}
            quickOrder={quickOrder}
            closeSummary={clearActiveSummary}
            initialItemSummary={activeSummary}
          />
        )
      }
      {
        quickOrder && quickOrder.itemId && (

          <QuickOrderPane
            addItemToCart={handleAddItemToCart}
            closeQuickOrder={clearQuickOrderItem}
            itemId={quickOrder.itemId}
            initialItemSummary={activeSummary}
            typeahead={queryString => suppliersReq.suggestSupplierName(queryString)}
          />
        )
      }

      <div className="row">
        <div className="col-md-6 col-lg-7">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center ai-icon  text-secondary">
                  <IoListOutline size={70} />
                  <h4 className="my-2">You don&apos;t have items yet</h4>
                  <Link to="/add-item" className="btn my-2 btn-primary btn-sm px-4">
                    <i className="fa fa-plus"></i> Add New Item
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center ai-icon  text-primary">
                  <FiShoppingCart size={70} />
                  <h4 className="my-2">
                    Manage Orders and Suppliers
                  </h4>
                  <Link to="/orders" className="btn my-2 btn-primary btn-sm px-4 mx-2">
                    <i className="fa fa-plus"></i> All Orders
                  </Link>
                  <Link to="/add-supplier" className="btn my-2 gradient-1 text-white btn-sm px-4 mx-2">
                    <i className="fa fa-plus"></i> Add New Supplier
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12">
              <SummaryNavigationPills currentPill={currentPill} switchPill={setPill} />
              {
                currentPill === "items" && (
                  <ItemsSummaryTable />
                )
              }
              {
                currentPill === "suppliers" && (
                  <ListSuppliersTable />
                )
              }
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-6">
              <div className="d-card">
                <div className="card gradient-5">
                  <div className="card-body text-center ai-icon  text-white">
                    <MdOutlineBubbleChart size={70} />
                    <h4 className="my-2 text-white">
                      Stock Points
                    </h4>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-card">
                <div className="card gradient-3">
                  <div className="card-body text-center ai-icon  text-white">
                    <MdOutlinePointOfSale size={70} />
                    <h4 className="my-2 text-white">
                      Stock Out
                    </h4>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-card">
                <div className="card gradient-1">
                  <div className="card-body text-center ai-icon  text-white">
                    <TbTruckDelivery size={70} />
                    <h4 className="my-2 text-white">
                      Suppliers
                    </h4>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-card">
                <div className="card gradient-4">
                  <div className="card-body text-center ai-icon  text-white">
                    <MdOutlineHistoryToggleOff size={70} />
                    <h4 className="my-2 text-white">
                      History
                    </h4>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-card">
                <div className="card gradient-2">
                  <div className="card-body text-center ai-icon  text-white">
                    <MdOutlineAccountBox size={70} />
                    <h4 className="my-2 text-white">
                      Account
                    </h4>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  );
}

export default Home;
