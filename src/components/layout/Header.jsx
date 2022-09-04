import React, {useCallback, useEffect, useState} from 'react';
import Logo from "../Logo";
import Modal from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {AuthService} from "../../services/auth-service";
import {set} from '../../features/slices/userSlice';
import {signOut} from "../../features/slices/authSlice";
import {useNavigate} from "react-router";

const Header = () => {
    const [modal, setModal] = useState(false);
    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.user.user)
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClick = useCallback(() => {
        setModal(true);
    },[]);

    const fetchCurrentUser = async () => {
        try {
            const response = await AuthService.getCurrentUser(token);
            dispatch(set(response.data.user))
            setIsLoading(false);
        } catch (error) {
            if (error.response.status === 403) {
                dispatch(signOut);
                navigate('/');
            } else {
                alert(error);
            }
        }
    }

    useEffect(() => {
        fetchCurrentUser().catch(console.error);
    },[]);

    if (isLoading) return <div className='full-screen center-content'> Loading... </div>

    return (
        <>
            <header>
                <Logo clickable={true}/>
                <div className='flex items-center'>
                    <div className='w-[60px] h-[60px] bg-primary-bg rounded-3xl mr-3 center-content text-primary-title text-lg font-bold'>
                        {user.firstName[0]}{user.secondName[0]}
                    </div>
                    <button onClick={onClick}> Configure </button>
                </div>
            </header>
            <Modal modal={modal} setModal={setModal}>
                <ConfigurationForm />
            </Modal>
        </>
    );
};

const ConfigurationForm = () => {
    return <p> Hello </p>
}

const DeleteMessage = () => {
    return (
        <div>
            Delete Message
        </div>
    )
}

export default Header;