import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TPendingCartState } from '../../../context/app/TPendingCartState'
import { useGetItem } from '../../../core/items/queries/getItem'
import useItemQueries, { ItemQueryNames } from '../../../core/items/queries/queries'
import { ItemsPayload, ItemsSummaryPanePayload } from '../../../core/items/type/payload'
import { UseFetchOneItem } from '../../../core/items/usecases/fetch-one-item'
import { TCartItem } from '../../../core/order/type/cart'

function ItemSummaryPane({ initialItemSummary: summary, closeSummary, openQuickOrderPane, quickOrder }: {
  initialItemSummary: ItemsSummaryPanePayload | null,
  closeSummary: () => void,
  openQuickOrderPane: (orderItem: TPendingCartState) => void,
  quickOrder?: TPendingCartState

}) {


  const {data: itemData } = useGetItem(summary?._id  || "") // silence ts

  // @ts-ignore
  const activeItem = {...summary, ...itemData} 

  return activeItem && summary ? (
    <div className={`chatbox active ${quickOrder ? `has-quick-order` : `` } `}>
      <div className="chatbox-close" />
      <div className="summary custom-tab-1">
        <div className="p-3">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group fg-line">
                  <label>Name</label>
                  <p className="form-control-plaintext input-sm"> {activeItem.itemName}</p>
                </div>
                <div className="form-group fg-line">
                  <label>Current Stock</label>
                  <p className="form-control-plaintext input-sm">{activeItem.currentStock || 'Empty'}</p>
                </div>
                <div className="form-group fg-line">
                  <label>Last Order Date</label>
                  <p className="form-control-plaintext input-sm">{activeItem.lastSupplyDate}</p>
                </div>
                <div className="form-group fg-line">
                  <label>Purchase Rate</label>
                  <p className="form-control-plaintext input-sm">{activeItem.itemPurchaseRate || 0}</p>
                </div>
              </form>
            </div>
          </div>
          <div className="summary-actions">
            <p><Link to={`/edit-item/${summary._id}`} className="btn btn-sm btn-block btn-warning" >Edit Item</Link></p>

            <p><a className="btn btn-sm btn-block btn-warning" onClick={() => openQuickOrderPane({itemId: summary._id})}>Add to cart</a></p>


            <p><a className="btn btn-sm btn-block btn-warning" ui-sref="items.summary.stockhistory">Stock History</a></p>
            <p><a className="btn btn-sm btn-block btn-danger" data-ng-click="delConfirm = !delConfirm; delBtnText = 'Are you sure ?'">Delete</a>
            </p>
            <p>
              <button className="btn btn-sm btn-block btn-link" onClick={() => closeSummary()}>Close</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : <></>

}

export default ItemSummaryPane