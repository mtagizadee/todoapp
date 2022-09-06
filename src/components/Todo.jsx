import React, {useState} from 'react';
import Option from "./ui/Option";
import {TodosService} from "../services/todos-service";
import {useSelector} from "react-redux";

const Todo = ({data}) => {
    const [todo, setTodo] = useState(data);
    const {title, description, completed} = todo;
    const token = useSelector(state => state.auth.token);

    const onOptionClick = async () => {
        try {
            const response = await TodosService.update(token,{completed: !completed}, todo.id)
            setTodo(response.data.todo);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className='w-screen max-w-[350px] bg-primary-card mb-3 p-6 rounded-2xl flex items-center justify-between popup'>
            <div>
                <h1 className='border-2 border-primary-border text-primary-title p-3 rounded-2xl'> {title} </h1>
                <p className='text-gray-400 mt-6 max-w-[250px]'> {description || 'No description provided'} </p>
            </div>
            <Option onClick={onOptionClick} color={completed? 'green' : 'red'} completed={completed}/>
        </div>
    );
};

export default Todo;