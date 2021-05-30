import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import FormTodo from '../../component/FormTodo';
import ListTodo from '../../component/ListTodo';
import './styles.scss';
import queryString from 'query-string';
import { useEffect } from 'react';
ListPage.propTypes = {

};

function ListPage(props) {

    const initListTodo = [
        {
            id: 1,
            title: 'Tien',

            status: 'completed',
        },
        {
            id: 2,
            title: 'Bình',

            status: 'new',
        },
        {
            id: 3,
            title: 'Nhân',

            status: 'new'
        }
    ]

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodolist] = useState(initListTodo);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });
    useEffect(() => {
        const paramSearch = queryString.parse(location.search);
        setFilterStatus(paramSearch.status || 'all')
    }, [location.search])
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
        const queryParams = {
            status: 'all',
        }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowCompletedClick = () => {
        const queryParams = {
            status: 'completed',
        }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowNewClick = () => {
        const queryParams = {
            status: 'new',
        }

        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handelTodoSubmit = (formValues) => {
        console.log('FormValues', formValues);
        // clone-todolist
        const newTodo = {
            id: todoList.length + 1,
            title: formValues.title,
            status: 'new',
        }
        const newTodoList = [
            ...todoList,
            newTodo,
        ]
        setTodolist(newTodoList);
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

export default ListPage;