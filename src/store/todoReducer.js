const defaultTodos = {
	todos: [
		{ title: 'Commit changes', id: 1, done: false },
		{ title: 'Learn  Redux Saga', id: 2, done: true }
	]
}

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const STATUS_TODO = 'STATUS_TODO'

export const todoReducer = (state = defaultTodos, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, todos: [...state.todos, action.payload] }
		case REMOVE_TODO:
			console.log('done')
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload)
			}
		case STATUS_TODO:
			console.log('done')
			return {
				...state,
				todos: state.todos.map((t) => {
					if (t.id === action.payload) {
						console.log(t)
						// !t.done
					}
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
