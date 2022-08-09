import React, { lazy, Suspense } from 'react';

/// Components
import Index from "./jsx";
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// action
import { isAuthenticated } from './store/selectors/AuthSelectors';
/// Style
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./scss/main.scss";
import "./scss/app.scss";
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import './vendor/datatables/css/dataTables.min.css';



// const SignUp = lazy(() => import('./jsx/pages/Registration'));
// const ForgotPassword = lazy(() => import('./jsx/pages/ForgotPassword'));
// const Login = lazy(() => {
//     return new Promise(resolve => {
//         // @ts-ignore
//         setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
//     });
// });

function App(props: any) {

    const routes = (
        <Routes>
            {/* <Route path='/login' element={<Login />} /> */}
            {/* <Route path='/page-register' element={<SignUp />} /> */}
            {/* <Route path='/page-forgot-password' element={<ForgotPassword history={props.history} />} /> */}
        </Routes>
    );
    // if (true) {
    if (props.isAuthenticated) {
        return (
            <>
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    <Index />
                </Suspense>
            </>
        );

    } else {
        return (
            <div className="vh-100">
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    {routes}
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
        isAuthenticated: isAuthenticated(),
    };
};

export default connect(mapStateToProps)(App);

