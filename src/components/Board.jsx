import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {useFindAllTodosQuery} from "../features/api/todosApi";
import Loader from "./Loader";
import Modal from "./Modal";
import Input from "../components/ui/Input";
import {TodosService} from "../services/todos-service";
import Todo from "./Todo";

const Board = () => {
    const userId = useSelector(state => state.user.user.id);
    const [modal, setModal] = useState(false);
    const { data, isLoading, error } = useFindAllTodosQuery(userId);
    const token = useSelector(state => state.auth.token);

    const onClick = useCallback(() => {
        setModal(true);
    },[]);


    const onCreate = useCallback(async (dto) => {
        const todo = await TodosService.create(token,dto);
        window.location.reload();
    },[]);

    if (isLoading) return <Loader />

    const todos = data.todos;
    const isEmpty = todos.length === 0;
    return (
        <>
            <div className='center-content flex-col mt-18 mb-20 mx-3 2sm:mx-12'>
                <div className={`center-content flex-col w-full max-w-[1400px]`}>
                    <div>
                        {isEmpty?
                            <p> There is noting yet... </p> :
                            <div className='pt-36 md:grid grid-cols-2 gap-[30px] lg:grid-cols-3'>
                                {
                                    todos.map(todo => <Todo data={todo} key={todo.id}/>)
                                }
                            </div>
                        }
                    </div>
                    <button className='mt-3' onClick={onClick}> Add </button>
                </div>
            </div>
            <Modal modal={modal} setModal={setModal}>
                <CreateTodoForm onClose={() => setModal(false)} onCreate={onCreate}/>
            </Modal>
        </>
    );
};

const CreateTodoForm = ({onClose, onCreate}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await onCreate({title, description})
            alert('Todos was successfully created, closing the modal');
            onClose();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Input value={title} setValue={setTitle} required={true} type='text' label='Title'/>
            <Input value={description} setValue={setDescription} required={true} type='text' label='Description'/>
            <button onClick={onSubmit}> Create </button>
        </form>
    );
}

export default Board;