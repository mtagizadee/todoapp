import React, {useCallback, useContext, useEffect, useState} from 'react';
import Logo from "../Logo";
import Modal from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {AuthService} from "../../services/auth-service";
import {set} from '../../features/slices/userSlice';
import {setIsAuth, setToken, signOut} from "../../features/slices/authSlice";
import Input from "../../components/ui/Input";
import {UserService} from "../../services/user-service";

const fixRequestDtoValue = (value) => {
    return value === ''? undefined : value;
}

const Header = () => {
    const [modal, setModal] = useState(false);
    const user = useSelector(state => state.user.user)

    const onClick = useCallback(() => {
        setModal(true);
    },[]);

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
                <ConfigurationForm setContainerModal={setModal} />
            </Modal>
        </>
    );
};

const ConfigurationForm = ({setContainerModal}) => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(false);
    const token = useSelector(state => state.auth.token);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await UserService.update(token,{
                email: fixRequestDtoValue(email),
                password: fixRequestDtoValue(password),
                firstName: fixRequestDtoValue(firstName),
                secondName: fixRequestDtoValue(secondName),
            });
            alert('Configuration was successfully done, closing the modal...');
            setContainerModal(false);
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    }

    const onClick = useCallback(() => {
        setModal(true);
    },[]);

    const onSignOutClick = async () => {
        try {
            await AuthService.signOut(token);
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <h1> Configuration </h1>
                    <Input
                        type='text'
                        value={firstName}
                        setValue={setFirstName}
                        required={false}
                        label='First name'
                    />
                    <Input
                        type='text'
                        value={secondName}
                        setValue={setSecondName}
                        required={false}
                        label='Second name'
                    />
                    <Input
                        type='email'
                        value={email}
                        setValue={setEmail}
                        required={false}
                        label='Email'
                    />
                    <Input
                        type='password'
                        value={password}
                        setValue={setPassword}
                        required={false}
                        label='Password'
                    />
                    <button> Update </button>
                </form>
                <div className='flex justify-evenly'>
                    <button onClick={onClick} className='bg-red-600 text-white ml-6'> Delete </button>
                    <button onClick={onSignOutClick}> Sign Out </button>
                </div>
            </div>
            <Modal modal={modal} setModal={setModal}>
                <DeleteMessage setContainerModal={setModal} />
            </Modal>
        </>
    )
}

const DeleteMessage = ({setContainerModal}) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const onYes = async () => {
        try {
            await UserService.delete(token);
            dispatch(setToken(''));
            dispatch(setIsAuth(false));
            alert('Deletion was successfully done, closing the modal...');
            setContainerModal(false);
        } catch (error) {
            alert(error);
        }
    }

    const onNo = useCallback(() => {
        setContainerModal(false);
    },[])

    return (
        <div className='bg-primary-card p-6 rounded-2xl center-content flex-col'>
            <p> Are you sure you want to delete your user? </p>
            <div className='flex items-center mt-3'>
                <button onClick={onYes} className='bg-red-600 text-white mr-3'> Yes </button>
                <button onClick={onNo}> No </button>
            </div>
        </div>
    )
}

export default Header;