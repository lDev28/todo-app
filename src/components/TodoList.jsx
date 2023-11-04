import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { AiOutlineClear } from 'react-icons/ai'
import { clearTodoAction } from '../store/todoReducer'

const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos)
	const dispacth = useDispatch()
	return (
		<div className='w-full box-border rounded-[25px] bg-light p-5 my-5'>
			{todos && todos.length > 0 ? (
				<div>
					<div>
						{todos.map((todo, index) => (
							<TodoItem todo={todo} key={index} index={index + 1} />
						))}
					</div>
					<div className='w-full flex flex-row justify-end '>
						<div
							onClick={() => dispacth(clearTodoAction())}
							className='flex flex-row items-center text-amber cursor-pointer'
						>
							<div className='text-2xl'>
								<AiOutlineClear />
							</div>
							<span className='text-l'>Clear Completed</span>
						</div>
					</div>
				</div>
			) : (
				<div className='text-2xl'>Nothing todo</div>
			)}
		</div>
	)
}

export default TodoList
