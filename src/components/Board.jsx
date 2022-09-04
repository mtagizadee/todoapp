import React from 'react';
import {useSelector} from "react-redux";

const Board = () => {
    const user = useSelector(state => state.user.user.id);

    return (
        <div>
            
        </div>
    );
};

export default Board;