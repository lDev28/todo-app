const defaultTodos = {
	todos: [
		{ title: 'Commit changes', id: 1, done: false },
		{ title: 'Learn  Redux Saga', id: 2, done: true }
	]
}

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const STATUS_TODO = 'STATUS_TODO'
const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS'
const UPDATE_TODO_TITLE = 'UPDATE_TODO_TITLE'

export const todoReducer = (state = defaultTodos, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, todos: [...state.todos, action.payload] }
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload)
			}
		case STATUS_TODO:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.payload) {
						return {
							...todo,
							done: !todo.done
						}
					}
					return todo
				})
			}
		case REMOVE_COMPLETED_TODOS:
			return {
				...state,
				todos: state.todos.filter((todo) => !todo.done)
			}
		case UPDATE_TODO_TITLE:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.payload.id) {
						return {
							...todo,
							title: action.payload.newTitle
						}
					}
					return todo
				})
			}

		default:
			return state
	}
}

export const addTodoAction = (payload) => ({
	type: ADD_TODO,
	payload
})

export const removeTodoAction = (payload) => ({
	type: REMOVE_TODO,
	payload
})

export const setStatusTodoAction = (payload) => ({
	type: STATUS_TODO,
	payload
})

export const clearTodoAction = () => ({
	type: REMOVE_COMPLETED_TODOS
})

export const updateTodoAction = (payload) => ({
	type: UPDATE_TODO_TITLE,
	payload
})
