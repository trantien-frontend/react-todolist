import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import './styles.scss';

ListTodo.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
ListTodo.defaultProps = {
    todoList: [],
    onTodoClick: null,
}
function ListTodo(props) {
    const { todoList, onTodoClick } = props;
    const handleChangeStatus = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    }

    return (
        <ul className="todolist__list">
            {todoList.map((todo, idx) =>
                <li
                    key={todo.id}
                    className={classname({
                        completed: todo.status === 'completed',
                        todolist__item: true,
                    })}
                    onClick={() => handleChangeStatus(todo, idx)}
                >
                    {todo.name}</li>
            )}
        </ul>
    );
}

export default ListTodo;