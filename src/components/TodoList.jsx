import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { AiOutlineClear } from 'react-icons/ai'

const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos)
	console.log(todos)
	return (
		<div className='w-full box-border rounded-[25px] bg-light p-5 my-5'>
			{todos && todos.length > 0 ? (
				<div>
					<div>
						{todos.map(
							(todo, index) => (
								console.log(todo),
								(<TodoItem todo={todo} key={index} index={index + 1} />)
							)
						)}
					</div>
					<div className='w-full flex flex-row justify-end '>
						<h2 className='flex flex-row items-center text-amber cursor-pointer'>
							<div className='text-2xl'>
								<AiOutlineClear />
							</div>
							<span className='text-l'>Clear Completed</span>
						</h2>
					</div>
				</div>
			) : (
				<div>Nothing todo</div>
			)}
		</div>
	)
}

export default TodoList
