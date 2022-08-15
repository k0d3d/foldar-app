import { ItemsActionType } from '../../../context/app/action-constants'
import { ItemsPayload, ItemsSummaryPanePayload, ItemsSummaryPayload } from '../../../core/items/type/payload'

type ListItemsTableProps = {
  items: ItemsPayload[] | ItemsSummaryPayload[],
  setActiveSummary: React.Dispatch<ItemsActionType>
}

function ListItemsTable({ items, setActiveSummary }: ListItemsTableProps) {


  return (
    <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Recent Payments Queue</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive recentOrderTable">
            <table className="table verticle-middle table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Stock Count</th>
                  <th scope="col">Status</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {
                  items.length > 0 ?
                    items.map((item, key) => (
                      <tr key={key}>
                        <td>{ item.itemName }</td>
                        <td>
                          { item.itemCategory.length > 1 && `${item.itemCategory.length} categories`  }
                          { item.itemCategory && item.itemCategory.length === 1 &&  item.itemCategory[0].categoryName  }
                        </td>
                        <td>{ item.currentStock}</td>
                        <td>
                          <span className="badge badge-rounded badge-primary">
                            InStock
                          </span>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown mb-0">
                            <button
                              className="btn sharp btn-success tp-btn"
                              onClick={() => setActiveSummary(item)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="18px"
                                height="18px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <circle fill="#000000" cx={12} cy={5} r={2} />
                                  <circle fill="#000000" cx={12} cy={12} r={2} />
                                  <circle fill="#000000" cx={12} cy={19} r={2} />
                                </g>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ) ) :
                    (
                      <tr>
                        <td>No items have been added.</td>
                      </tr>
                    )
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ListItemsTable