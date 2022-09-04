import React, {useState} from 'react';
import Logo from "../../components/Logo";
import Input from "../../components/ui/Input";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {giveAccess, setIsAuth, setToken} from "../../features/slices/authSlice";
import {useNavigate} from "react-router";
import {AuthService} from "../../services/auth-service";

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmedPassword) {
            try {
                const response = await AuthService.signup({
                    email,
                    password,
                    firstName,
                    secondName
                });
                dispatch(setIsAuth(true));
                dispatch(setToken(response.data.token));
                alert('Successfully signed up, navigating to todos page...');
                navigate('/');
            } catch (error) {
                alert(error);
            }

        } else {
            alert("Repeated password doesn't match original password");
        }
    }

    return (
        <div className='full-screen center-content'>
            <form onSubmit={onSubmit}>
                <Logo clickable={false} />
                <Input
                    type='text'
                    value={firstName}
                    setValue={setFirstName}
                    label='First name'
                    required={true}
                />
                <Input
                    type='text'
                    value={secondName}
                    setValue={setSecondName}
                    label='Second name'
                    required={true}
                    className='my-3'
                />
                <Input
                    type='email'
                    value={email}
                    setValue={setEmail}
                    label='Email'
                    required={true}
                />
                <Input
                    type='password'
                    value={password}
                    setValue={setPassword}
                    label='Password'
                    required={true}
                    className='my-3'
                />
                <Input
                    type='password'
                    value={confirmedPassword}
                    setValue={setConfirmedPassword}
                    label='Confirm pass.'
                    required={true}
                />
                <button> Sign up </button>
                <div className='form-link'>
                    <p> Already have an account? </p>
                    <NavLink to='/auth/login' className='link'> Log in </NavLink>
                </div>
            </form>
        </div>
    );
};

export default Signup;