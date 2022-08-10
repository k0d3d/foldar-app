import { ItemsPayload } from '../../../core/items/type/payload'

type ListItemsTableProps = {
  items: ItemsPayload[]
}

function ListItemsTable({ items }: ListItemsTableProps) {


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
                  <th scope="col">Price</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {
                  items.length > 0 ?
                    items.map((item, key) => (
                      <tr key={key}>
                        <td>{ item.itemName }</td>
                        <td>{ item.itemCategory }</td>
                        <td>{ item.itemPrices && item.itemPrices[0] }</td>
                        <td>{ item.inStock}</td>
                        <td>
                          <span className="badge badge-rounded badge-primary">
                            InStock
                          </span>
                        </td>
                        <td></td>
                        <td>
                          <div className="dropdown custom-dropdown mb-0">
                            <div
                              className="btn sharp btn-primary tp-btn"
                              data-bs-toggle="dropdown"
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
                            </div>
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