function Todo(props) {
    return (
        <li>{props.todo.task}<button onClick={e => props.removeTodoItem(props.todo.id)}>X</button></li>
    )
}

export default Todo;