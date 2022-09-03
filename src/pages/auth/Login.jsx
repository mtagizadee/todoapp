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
                    type='text'
                    label='Email'
                    className='my-3'
                />
                <Input
                    value={password}
                    setValue={setPassword}
                    type='password'
                    label='Password'
                />
                <button className='my-6'> Log in </button>
                <div className='center-content flex-col'>
                    <p> Already have an account? </p>
                    <NavLink to='/auth/signup' className='link'> Sign up </NavLink>
                </div>
            </form>
        </div>
    );
};

export default Login;