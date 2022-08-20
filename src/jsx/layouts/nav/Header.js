import React from "react";
import { Link } from "react-router-dom";
import QuickCartWidget from "../../../widgets/cart/quick-cart";
/// Scroll

/// Image

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                Home
              </div>
            </div>
            <ul className="navbar-nav header-right main-notification">
            <li className="nav-item dropdown notification_dropdown">
                <QuickCartWidget />
              </li>

              <li className="nav-item">
                <div className="input-group search-area">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here"
                  />
                  <span className="input-group-text">
                    <Link to={"#"}>
                      <i className="flaticon-381-search-2"></i>
                    </Link>
                  </span>
                </div>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
