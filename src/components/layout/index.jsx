import React, {useContext, useEffect, useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {AuthService} from "../../services/auth-service";
import {set} from "../../features/slices/userSlice";
import {setIsAuth, setToken} from "../../features/slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Loader";

const LayOut = ({children}) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCurrentUser = async () => {
        try {
            const response = await AuthService.getCurrentUser(token);
            dispatch(set(response.data.user));
            setIsLoading(false);
        } catch (error) {
            if (error.response.status === 403) {
                dispatch(setToken(''));
                dispatch(setIsAuth(false));
            } else {
                alert(error);
            }
        }
    }

    useEffect(() => {
        fetchCurrentUser().catch(console.error);
    },[]);

    if (isLoading) return <Loader />

    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default LayOut;