import React, { useState } from 'react'
import { updateTodoAction } from '../store/todoReducer'
import { useDispatch } from 'react-redux'

const UpdateTodoForm = ({ todo }) => {
	const [newtitle, setTitle] = useState(todo.title)

	const dispatch = useDispatch()
	const newTodo = {
		newTitle: newtitle,
		id: todo.id
	}

	const updateTodo = (e) => {
		e.preventDefault()
		if (newtitle !== '') {
			dispatch(updateTodoAction(newTodo))
			setTitle('')
		}
	}

	return (
		<form className='flex flex-col'>
			<input
				type='text'
				value={newtitle}
				onChange={(e) => setTitle(e.target.value)}
				className='rounded-[25px] w-full h-[40px] px-5 p-2 bg-light my-2'
				placeholder='Title'
			/>
			<button
				className='uppercase bg-blue rounded-[25px] px-5 py-1 text-white font-bold'
				onClick={updateTodo}
			>
				update
			</button>
		</form>
	)
}

export default UpdateTodoForm
