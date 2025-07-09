import { useState, useRef, useEffect } from 'react'
import { getStorage, setStorage } from '../utils/storage'

export function useTodos() {
    let lastId = parseInt(getStorage('id', 4))

    const [todos, setTodos] = useState(getStorage('todos', [
        { id: 3, text: '공부하기', checked: true },
        { id: 2, text: '코딩하기', checked: false },
        { id: 1, text: '운동하기', checked: true },
    ]))

    useEffect(() => {
        setStorage('todos', todos);
    }, [todos]);

    const addTodo = (text) => {
        const todo = { id: lastId, text, checked: false }
        setTodos([todo, ...todos])
        lastId = lastId + 1
        setStorage('id', lastId);
    }

    const removeTodo = (selectedId) => {
        const filterTodos = todos.filter((todo) => todo.id != selectedId)
        setTodos(filterTodos)
    }

    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    return { todos, addTodo, removeTodo, toggleTodo }
}