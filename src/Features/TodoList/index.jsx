import React, { useState } from 'react';
import FormTodo from './component/FormTodo';
import ListTodo from './component/ListTodo';
import './styles.scss';
TodoList.propTypes = {

};

function TodoList(props) {

    const initListTodo = [
        {
            id: 1,
            name: 'Tien',
            age: 18,
            status: 'completed',
        },
        {
            id: 2,
            name: 'Bình',
            age: 18,
            status: 'new',
        },
        {
            id: 3,
            name: 'Nhân',
            age: 18,
            status: 'new'
        }
    ]
    const [todoList, setTodolist] = useState(initListTodo);
    const [filterStatus, setFilterStatus] = useState('');
    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        // toggle state 
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        newTodoList[idx] = newTodo;
        setTodolist(newTodoList);
    }
    const handleShowAllClick = () => {
        setFilterStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    }
    const handleShowNewClick = () => {
        setFilterStatus('new');
    }
    const handelTodoSubmit = (formValues) => {
        console.log('FormValues', formValues);
    }
    const rendered = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    return (
        <div className="todolist">
            <h3 className="todolist__title">To-do-Form</h3>
            <FormTodo onSubmit={handelTodoSubmit} />
            <h3 className="todolist__title">to-do-list</h3>
            <ListTodo todoList={rendered} onTodoClick={handleTodoClick} />
            <button className="todolist__button" onClick={handleShowAllClick}>ShowAll</button>
            <button className="todolist__button" onClick={handleShowCompletedClick}>ShowCompleted</button>
            <button className="todolist__button" onClick={handleShowNewClick}>ShowNew</button>
        </div>
    );
}

export default TodoList;