import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as InventoryBagImg } from '../../../images/svg/bag.svg'
import SummaryNavigationPills from '../../../widgets/home/SummaryNav'
import ItemsSummaryTable from '../../../widgets/items/ItemsSummaryTable'
import ListItemsTable from '../item/ListItemsTable'

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center ai-icon  text-primary">
              <InventoryBagImg />
              <h4 className="my-2">You don&apos;t have items yet</h4>
              <Link to="/add-item" className="btn my-2 btn-primary btn-sm px-4">
                <i className="fa fa-plus"></i> Add New Item
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12col-md-7 col-lg-8 col-sm-12">
          <SummaryNavigationPills />
          <ItemsSummaryTable />
        </div>
      </div>
    </>
  )
}

export default Home