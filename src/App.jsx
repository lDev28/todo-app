import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addTodoAction } from './store/todoReducer'
import TodoForm from './components/TodoForm'
import { useEffect } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

function App() {
	const todos = useSelector((state) => state.todos.todos)
	const dispatch = useDispatch()

	const addTodo = (todo) => {
		dispatch(addTodoAction(todo))
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	useEffect(() => {
		// console.log(todos)
	}, [todos])

	return (
		<>
			<Header />
			<div className='p-5 max-w-[600px] mx-auto flex flex-col justify-around'>
				<TodoForm addTodo={addTodo} />
				<TodoList />
			</div>
			<Footer />
		</>
	)
}

export default App
