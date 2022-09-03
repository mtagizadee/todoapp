import React from 'react';
import {useSelector} from "react-redux";

const Home = () => {
    const auth = useSelector((state) => state);
    console.log(auth);

    return (
        <div className='full-screen center-content'>
            Home Page
        </div>
    );
};

export default Home;