import { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

function TodoWriteForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return
        addTodo(inputValue)
        setInputValue('')
    }

    return (
        <Form onSubmit={handleOnSubmit} className="mb-3">
            <InputGroup>
                <Form.Control
                    type="text"
                    name="todo"
                    placeholder="할 일을 입력하세요..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button variant="primary" type="submit">
                    등록
                </Button>
            </InputGroup>
        </Form>
    )
}

export default TodoWriteForm
