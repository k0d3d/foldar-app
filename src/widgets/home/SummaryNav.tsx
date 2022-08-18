import React from 'react'

function SummaryNavigationPills({switchPill, currentPill}) {
  return (
    <ul className="nav nav-pills mb-4 light">
      <li className=" nav-item">
        <a
          onClick={ () => switchPill("items") }
          href="#"
          className={`nav-link ${ currentPill === "items" && 'active' }`}
          data-bs-toggle="tab"
          aria-expanded="false"
        >
          Items
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={ () => switchPill("orders") }
          href="#"
          className={`nav-link ${ currentPill === "orders" && 'active' }`}
          data-bs-toggle="tab"
          aria-expanded="false"
        >
          Orders
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={ () => switchPill("suppliers") }
          href="#"
          className={`nav-link ${ currentPill === "suppliers" && 'active' }`}
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