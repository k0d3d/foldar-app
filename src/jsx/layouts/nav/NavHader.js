import { Fragment, useContext } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";


const NavHader = () => {
  const { navigationHader, background } = useContext(
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
