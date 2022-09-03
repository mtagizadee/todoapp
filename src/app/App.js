import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Error from "../pages/error/Error";
import Home from "../pages/Home/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<Home />}/>
                <Route path='auth/login' exact={true} element={<Login />}/>
                <Route path='auth/signup' exact={true} element={<Signup />}/>
                <Route path='*' exact={true} element={<Navigate to='/error' />}/>
                <Route path='/error' exact={true} element={<Error />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;