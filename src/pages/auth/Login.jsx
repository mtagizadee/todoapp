import React, {useState} from 'react';
import Logo from "../../components/Logo";
import Input from "../../components/ui/Input";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../features/slices/authSlice";
import {useNavigate} from "react-router";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(await login({email, password}));
            alert('Successfully logged in, navigating to home page...');
            navigate('/');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className='full-screen center-content'>
            <form onSubmit={onSubmit}>
                <Logo clickable={true}/>
                <Input
                    value={email}
                    setValue={setEmail}
                    type='email'
                    label='Email'
                    required={true}
                    className='my-3'
                />
                <Input
                    value={password}
                    setValue={setPassword}
                    type='password'
                    label='Password'
                    required={true}
                />
                <button> Log in </button>
                <div className='form-link'>
                    <p> Don't have an account? </p>
                    <NavLink to='/auth/signup' className='link'> Sign up </NavLink>
                </div>
            </form>
        </div>
    );
};

export default Login;