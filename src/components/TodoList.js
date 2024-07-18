import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../redux/todosSlice'
import { useState } from 'react';

function TodoList() {
    const todos = useSelector((state) => state.todos); // .todos: see index.js
    const [task, setTask] = useState('');

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTodo({ task }));
    }

    const removeTodoItem = id => dispatch(removeTodo({ id }))

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='task'>Task: </label>
                <input type='text' name='task' id='task' value={task} onChange={e => setTask(e.target.value)}></input>
                <button type='submit'>Add task</button>
            </form>
            <ul>{todos.todos.map(item => <Todo key={item.id} todo={item} removeTodoItem={removeTodoItem} />)}</ul>
        </>
    );
}

export default TodoList;