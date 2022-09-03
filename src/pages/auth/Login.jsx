import React, {useState} from 'react';
import Logo from "../../components/Logo";
import Input from "../../components/ui/Input";
import {NavLink} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='full-screen center-content'>
            <form>
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