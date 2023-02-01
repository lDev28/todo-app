const d = document

const btnAddTodo = d.getElementById('btnAddTodo')

const todos = []


btnAddTodo.addEventListener('click', () => {
	const inputTodo = d.getElementById('inputTodo')
	const inputTask = d.getElementById('inputTask')
	if (inputTodo.value != '' && inputTask.value != '') {
		addTodo(inputTodo.value, inputTask.value)
	} else {
		return
	}
	inputTodo.value = ''
	inputTask.value = ''
})


function addTodo(text, task) {

	const todo = {
		text,
		task,
		done: false,
		id: `${Math.random()}`
	}

	todos.push(todo)
	closeInput()
	render()
}



function deleteTodo(id) {

	todos.forEach(todo => {
		if (todo.id === id) {
			todo.done = true
		}
	})
	render()
}



function render() {

	let html = ''

	todos.forEach(todo => {
		if (todo.done) {
			return
		}

		html += `
			<div class="todoElem">
				<input type="checkbox" class="check-box">
				<span class="todoTitle">${todo.text}
					<p class="todoContent">${todo.task}</p>
				</span>
					<img data-id="${todo.id}" src="img/delete.png" alt="delete">
			</div>
			`
	})

	$todoNode.innerHTML = html
}


const $todoNode = d.querySelector('.todos')
render()

$todoNode.addEventListener('click', (event) => {

	if (event.target.tagName !== 'IMG') {
		return
	}

	const id = event.target.dataset.id

	deleteTodo(id)

	render()
})


d.querySelector('.add').addEventListener('click', () => {
	d.querySelector('.todoInput').classList.add('active')
})


d.querySelector('.closeBtn').addEventListener('click', closeInput)
function closeInput() {
	d.querySelector('.todoInput').classList.remove('active')
}


d.querySelector('#dayNight').addEventListener('click', () => {
	d.body.classList.toggle('night')
	d.querySelector('.wrapper').classList.toggle('night')
	d.querySelector('.header').classList.toggle('night')
	d.getElementById('flexBtn').classList.toggle('night')
	d.querySelector('.todos').classList.toggle('night')
	d.querySelector('.footer').classList.toggle('night')
	d.querySelectorAll('.footer__btn').forEach(footerBtn =>{
		footerBtn.classList.toggle('night')
	})
	checkClass()
})


const $flexBtn = d.querySelector('#flexBtn')
$flexBtn.addEventListener('click', () => {
	d.querySelector('.todos').classList.toggle('grid')
	$flexBtn.classList.toggle('grid')
})


function checkClass() {
	const $menuElem = d.querySelectorAll('.flexBtn__elem')
	$menuElem.forEach(elem => {
		if ($flexBtn.classList.contains('night')) {
			elem.classList.add('night')
		} else {
			elem.classList.remove('night')
		}
	})
}

