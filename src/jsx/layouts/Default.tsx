import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import AppNav from './nav';

function DefaultPageLayout(props) {
  return (
    <div id={`${!props.pagePath ? "main-wrapper" : ""}`} className={`${!props.pagePath ? "show" : "vh-100"}  ${props.menuToggle ? "menu-toggle" : ""}`}>
      <AppNav />
      <div className={`${!props.pagePath ? "content-body" : ""}`}>
        <div className={`${!props.pagePath ? "container-fluid" : ""}`} style={{
          minHeight: "60vh"
        }}>
          <Routes>
            {props.routes.map((data, i) => <Route key={i} path={`/${data.url}`} element={data.component} />)}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultPageLayout