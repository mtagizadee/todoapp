import React, {useState} from 'react';
import Logo from "../../components/Logo";
import Input from "../../components/ui/Input";
import {NavLink} from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    return (
        <div className='full-screen center-content'>
            <form>
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