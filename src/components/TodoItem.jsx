import React from 'react'
import MyButton from './UI/button/MyButton'
import { AiOutlineDelete } from 'react-icons/ai'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { removeTodoAction, setStatusTodoAction } from '../store/todoReducer'

const TodoItem = ({ todo, index, ...props }) => {
	const dispatch = useDispatch()
	const removeTodo = (todo) => {
		dispatch(removeTodoAction(todo.id))
	}

	const setStatusTodo = (todo) => {
		console.log(todo)
		dispatch(setStatusTodoAction(todo.id))
	}

	return (
		<div
			className='w-full pb-2  flex flex-row justify-between items-center my-3 border-solid border-b-2 border-blue'
			{...props}
		>
			<div>
				{todo.done !== undefined && todo.done ? (
					<div className='text-2xl  flex flex-row items-center'>
						<div
							onClick={() => setStatusTodo(todo)}
							className='text-amber mx-2 cursor-pointer'
						>
							<IoCheckmarkDoneCircleOutline />
						</div>
						<h2 className='mx-3 max-w-full text-gray line-through '>
							{todo.title}
						</h2>
					</div>
				) : (
					<div className='text-2xl  flex flex-row items-center'>
						<div
							onClick={() => setStatusTodo(todo)}
							className='rounded-full border-gray border-2 w-[20px]  mx-2 cursor-pointer h-[20px]'
						></div>
						<h2 className='mx-3  max-w-full'>{todo.title}</h2>
					</div>
				)}
			</div>
			<div className='mx-2 flex justify-start'>
				{/* <p>{todo.description}</p> */}
			</div>
			<MyButton
				className='bg-none text-amber text-xl
			'
				onClick={() => removeTodo(todo)}
			>
				<AiOutlineDelete />
			</MyButton>
		</div>
	)
}

export default TodoItem
