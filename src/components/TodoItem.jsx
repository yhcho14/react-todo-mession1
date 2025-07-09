import { Button, Form, ListGroup } from 'react-bootstrap'

function TodoItem({ todo, removeTodo, toggleTodo }) {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <Form.Check
                type="checkbox"
                id={`todo-${todo.id}`}
                label={
                    <span className={todo.checked ? 'text-decoration-line-through text-muted' : ''}>{todo.text}</span>
                }
                onChange={() => toggleTodo(todo.id)}
                checked={todo.checked}
            />
            <Button variant="outline-danger" size="sm" onClick={() => removeTodo(todo.id)}>
                X
            </Button>
        </ListGroup.Item>
    )
}

export default TodoItem
