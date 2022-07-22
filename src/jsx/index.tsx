import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Home from './components/dashboard/Home';
import Footer from './layouts/Footer';
import AppNav from './layouts/nav';

import "./index.css";
import "./chart.css";
import "./step.css";

function Page() {
  const { menuToggle } = useContext(ThemeContext);

  const routes = [
    { url: "", component: Home },
    { url: "dashboard", component: Home },

  ]

  const pathname = window.location.pathname;
  // let path = pathname.split("/");
  // path = path[path.length - 1];

  const pagePath = pathname.split("-").includes("page");

  return (
    <>
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "vh-100"}  ${menuToggle ? "menu-toggle" : ""
          }`}
      >
        <AppNav />
        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: "60vh" }}
          >
            <Routes>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  path={`/${data.url}`}
                  element={<data.component />}
                />
              ))}

            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Page