import { ListGroup } from 'react-bootstrap'
import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <ListGroup>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </ListGroup>
    )
}

export default TodoList
