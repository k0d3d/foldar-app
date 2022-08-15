import { Link } from 'react-router-dom'
import { TPendingCartState } from '../../../context/app/TPendingCartState'
import { ItemsSummaryPanePayload } from '../../../core/items/type/payload'

function ItemSummaryPane({ summary, closeSummary, openQuickOrderPane, quickOrder }: {
  summary: ItemsSummaryPanePayload | null,
  closeSummary: () => void,
  openQuickOrderPane: (orderItem: ItemsSummaryPanePayload) => void,
  quickOrder?: TPendingCartState

}) {


  return summary && (
    <div className={`chatbox active ${quickOrder ? `has-quick-order` : `` } `}>
      <div className="chatbox-close" />
      <div className="summary custom-tab-1">
        <div className="p-3">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group fg-line">
                  <label>Name</label>
                  <p className="form-control-plaintext input-sm"> {summary.itemName}</p>
                </div>
                <div className="form-group fg-line">
                  <label>Current Stock</label>
                  <p className="form-control-plaintext input-sm">{summary.currentStock || 'Empty'}</p>
                </div>
                <div className="form-group fg-line">
                  <label>Last Order Date</label>
                  <p className="form-control-plaintext input-sm">{summary.lastSupplyDate}</p>
                </div>
                <div className="form-group fg-line">
                  <label>Purchase Rate</label>
                  <p className="form-control-plaintext input-sm">{summary.itemPurchaseRate || 0}</p>
                </div>
              </form>
            </div>
          </div>
          <div className="summary-actions">
            <p><Link to={`/edit-item/${summary._id}`} className="btn btn-sm btn-block btn-warning" >Edit Item</Link></p>

            <p><a className="btn btn-sm btn-block btn-warning" onClick={() => openQuickOrderPane(summary)}>Add to cart</a></p>


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
  )

}

export default ItemSummaryPane