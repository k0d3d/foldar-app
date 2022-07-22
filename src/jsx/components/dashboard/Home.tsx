import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as InventoryBagImg }  from '../../../images/svg/bag.svg'

function Home() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body text-center ai-icon  text-primary">
            <InventoryBagImg />
            <h4 className="my-2">You don&apos;t have items yet</h4>
            <Link to="#" className="btn my-2 btn-primary btn-sm px-4">
              <i className="fa fa-plus"></i> Add New Item
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home