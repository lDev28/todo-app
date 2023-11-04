import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaPenToSquare } from 'react-icons/fa6'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeTodoAction, setStatusTodoAction } from '../store/todoReducer'
import MyModal from './UI/modal/MyModal'
import UpdateTodoForm from './UpdateTodoForm'

const TodoItem = ({ todo, index, ...props }) => {
	const [modal, setModal] = useState(false)

	const dispatch = useDispatch()

	// FUNCTIONS
	const removeTodo = (todo) => {
		dispatch(removeTodoAction(todo.id))
	}

	const setStatusTodo = (todo) => {
		dispatch(setStatusTodoAction(todo.id))
	}

	return (
		<div
			className='w-full pb-2  flex flex-row justify-between items-center my-3 border-solid border-b-2 border-blue'
			{...props}
		>
			<div>
				{todo.done ? (
					<div className='text-[18px] flex flex-row items-center'>
						<div
							onClick={() => setStatusTodo(todo)}
							className='text-amber mx-2 cursor-pointer'
						>
							<AiOutlineCheckCircle />
						</div>
						<div className='text-l mx-3 max-w-full text-gray line-through '>
							{index}. {todo.title}
						</div>
					</div>
				) : (
					<div className='text-[18px] flex flex-row items-center'>
						<div
							onClick={() => setStatusTodo(todo)}
							className='text-gray mx-2 cursor-pointer'
						>
							<AiOutlineCloseCircle />
						</div>
						<h2 className='mx-3  max-w-full'>
							{index}. {todo.title}
						</h2>
					</div>
				)}
			</div>
			<div className='mx-2 flex justify-start'></div>
			{/* BUTTONS */}
			<div>
				<MyButton
					className='bg-none text-amber text-xl mr-5
			'
					onClick={() => setModal(!modal)}
				>
					<FaPenToSquare />
				</MyButton>
				<MyButton
					className='bg-none text-amber text-xl
			'
					onClick={() => removeTodo(todo)}
				>
					<AiOutlineDelete />
				</MyButton>
			</div>
			<MyModal title={'Update Todo'} modal={modal} openModal={setModal}>
				<UpdateTodoForm todo={todo} />
			</MyModal>
		</div>
	)
}

export default TodoItem
