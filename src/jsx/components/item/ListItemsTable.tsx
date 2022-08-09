import React from 'react'
import { Item } from '../../../core/items/domain/Item'

type ListItemsTableProps = {
  items: any[]
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
                    (<tr>
                      <td>12</td>
                      <td>Mr. Bobby</td>
                      <td>Dr. Jackson</td>
                      <td>01 August 2020</td>
                      <td>
                        <span className="badge badge-rounded badge-primary">
                          Checkin
                        </span>
                      </td>
                      <td>$120</td>
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
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="javascript:void();;">
                              Details
                            </a>
                            <a
                              className="dropdown-item text-danger"
                              href="javascript:void();;"
                            >
                              Cancel
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>) :
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