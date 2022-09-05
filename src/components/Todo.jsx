import React from 'react';

const Todo = ({todo}) => {
    const {title, description, completed} = todo;

    // TODO finish it
    return (
        <div className='w-screen max-w-[400px]'>
            <div>
                <h1> {title} </h1>
                <p> {description || 'No description provided'} </p>
            </div>
            <div className={`w-[20px] h-[20px] ${todo.completed? 'bg-green-600' : 'bg-red-600'}`}/>
        </div>
    );
};

export default Todo;