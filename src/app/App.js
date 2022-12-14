import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {privateRoutes, publicRoutes} from "../routes";

const App = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const routes = isAuth? privateRoutes : publicRoutes;

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<Navigate to={isAuth? '/todos' : '/auth/login'} />}/>
                {routes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        element={<route.element />}
                        key={route.path}
                    />
                )}
                <Route path='*' exact={true} element={<Navigate to='/' />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;