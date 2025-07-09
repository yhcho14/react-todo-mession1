import { Card, Col, Container, Row } from 'react-bootstrap'
import TodoWriteForm from './components/TodoWriteForm'
import TodoList from './components/TodoList'
import { useTodos } from './hooks/useTodos'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos()

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card>
                        <Card.Body>
                            <h1 className="text-center mb-4">Todo List</h1>
                            <TodoWriteForm addTodo={addTodo} />
                            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default App
