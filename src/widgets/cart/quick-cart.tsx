

import React, { useEffect, useState } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useAppRoot } from '../../context/app/app-root'
import { TRootState } from '../../context/app/rootState'
import { TOrderDispatch } from '../../context/cart/dispatch-handlers'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

function QuickCartWidget() {

  const [widgetDropDown, setWidgetDropdown] = useState(false)
  const appRootContext = useAppRoot()
  const { fetchOrderCartItems } = appRootContext.cart as unknown as TOrderDispatch
  const { cartItems } = appRootContext.state as unknown as TRootState

  useEffect(() => {
    fetchOrderCartItems()
  }, [])

  return (
    <>
      <button
        className="nav-link ai-icon show"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        onClick={() => setWidgetDropdown(!widgetDropDown)}
      >
        <FaCartArrowDown />
        <div className="pulse-css" />
      </button>
      {
        widgetDropDown && (cartItems && cartItems.length > 0) && <div className="dropdown-menu dropdown-menu-end show" data-bs-popper="none">
          <div
            id="DZ_W_Notification1"
            className="widget-media dz-scroll p-3 ps ps--active-y"
            style={{ height: 380 }}
          >
            <ul className="timeline">
              {
                cartItems.map((item, key) => (
                  <li key={key}>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="image" width={50} src="https://picsum.photos/50" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">{item.itemName}</h6>
                        <small className="d-block">
                          <Moment calendar>

                            {item.orderDate}
                          </Moment>
                        </small>
                        <small className="d-block">{item.orderAmount} items</small>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
            <div className="ps__rail-y" style={{ top: 0, right: 0, height: 380 }}>
              <div
                className="ps__thumb-y"
                tabIndex={0}
                style={{ top: 0, height: 296 }}
              />
            </div>
          </div>
          <Link className="all-notification" to={`/cart`}>
            Show all items.  <i className="ti-arrow-end" />
          </Link>
        </div>
      }

    </>

  )
}

export default QuickCartWidget