import React from 'react'

function SummaryNavigationPills() {
  return (
    <ul className="nav nav-pills mb-4 light">
      <li className=" nav-item">
        <a
          href="#navpills-1"
          className="nav-link active"
          data-bs-toggle="tab"
          aria-expanded="false"
        >
          Items
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#navpills-2"
          className="nav-link"
          data-bs-toggle="tab"
          aria-expanded="false"
        >
          Orders
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#navpills-3"
          className="nav-link"
          data-bs-toggle="tab"
          aria-expanded="true"
        >
          Suppliers
        </a>
      </li>
    </ul>

  )
}

export default SummaryNavigationPills