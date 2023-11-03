import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const TodoForm = ({ addTodo }) => {
	const [todoTitle, setTodoTitle] = useState('')
	// const [todoDescription, setTodoDescription] = useState('')

	const addTododo = (e) => {
		e.preventDefault()
		if (todoTitle.length > 0) {
			const todo = {
				id: Date.now(),
				title: todoTitle,
				done: false
				// description: todoDescription
			}
			addTodo(todo)
			setTodoTitle('')
			// setTodoDescription('')
		} else {
			console.log('enter')
		}
	}

	return (
		<form className='w-full flex flex-row'>
			<MyInput
				type='text'
				value={todoTitle}
				onChange={(e) => setTodoTitle(e.target.value)}
				placeholder='What do you need to do?'
			/>
			<MyButton onClick={addTododo}>ADD</MyButton>
		</form>
	)
}

export default TodoForm
