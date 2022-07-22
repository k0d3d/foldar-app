import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";


const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );
  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
          <Fragment>

						<h2>Folders</h2>
          </Fragment>
        ) : (
          <Fragment>
						<h2>Folders</h2>
          </Fragment>
        )}
      </Link>

    </div>
  );
};

export default NavHader;
