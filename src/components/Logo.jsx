import React, {memo} from 'react';
import {useNavigate} from "react-router";

const Logo = memo(({clickable}) => {
    const navigate = useNavigate()
    const onClick = clickable? () => navigate('/') : undefined;

    return (
        <div
            className={`text-xl font-bold ${clickable && 'clickable'}`}
            onClick={onClick}
        > ToDo <span className='text-primary-title'> App </span> </div>
    );
});

export default Logo;