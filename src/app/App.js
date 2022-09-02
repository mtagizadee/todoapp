import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Error from "../pages/error/Error";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<div> App </div>}/>
                <Route path='auth/login' exact={true} element={<Login />}/>
                <Route path='auth/signup' exact={true} element={<Signup />}/>
                <Route path='*' exact={true} element={<Navigate to='/error' />}/>
                <Route path='/error' exact={true} element={<Error />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;