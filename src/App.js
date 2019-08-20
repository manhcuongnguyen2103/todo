import React from 'react';
import './App.css';

const Title = () => {
	return (
		<div>
			<h2 className="textCenter">To-do List</h2>
		</div>
	);
};


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleNewTodoAddition = this.handleNewTodoAddition.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}
	
	handleNewTodoAddition() {
		if(this.input.value !== '') {
			this.props.addTodo(this.input.value);
			this.setState({
				value: ''
			});
			this.input.placeholder = "Add todo here...";
		}
	}
	
	render() {
		return (
			<div className="form">
				<input 
					ref={node => {
						this.input = node;
					}}
					value={this.state.value}
					placeholder="Add todos here..."
					autocomplete="off"
					onChange={this.handleChange}
          maxLength="50"
          onKeyPress={this.handleNewTodoAddition}
				/>
        <div>
				<button 
					onClick={this.handleNewTodoAddition}
				>	
				Add Todo
				</button>	
        </div>
			</div>
		);
	}
}

const Todo = ({todo, remove}) => {
	return (
		<p className="todos">
			{todo.value}
			<span 
				className="removeBtn"
				onClick={()=> {
					remove(todo.id)
				}}>
				X
			</span>
		</p>
	);
};

const List = ({todos, remove}) => {
	let allTodos = [];
	
	if(todos.length > 0) {
		allTodos = todos.map(todo => {
			return (<Todo todo={todo} remove={remove} />);
		});
	} else {
		allTodos.push(<span className="noTodo">Nothing todo !</span>);
	}
	
	return (
		<div className="list">
			<p className="info"> Your Todos: </p>
			{allTodos}
		</div>
	);
};


class Container extends React.Component {
	constructor(props) {
		super(props);
		const data = [
			{
				id: -1,
				value: "This is default note ’Kun ハンサム’"
			}
		];
		
		const localData = localStorage.todos && JSON.parse(localStorage.todos);

		this.state = { 
			data: localData || data
		};
		
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	updateLocalStorage() {
		if (typeof(Storage) !== "undefined")
			localStorage.todos = JSON.stringify(this.state.data);
	}

	addTodo(val) {
		let id;
		if (typeof(Storage) !== "undefined") {
			id = Number(localStorage.count);
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}
		
		const todo = { 
			value: val, 
			id: id 
		};
		
		this.state.data.push(todo);

		this.setState({
			data: this.state.data
		}, () => {
			this.updateLocalStorage();
		});
	}

	removeTodo(id) {

		const list = this.state.data.filter(todo => {
			if (todo.id !== id)
				return todo;
		});

		this.setState({
			data: list
		}, () => {
			this.updateLocalStorage();
		});
	}
	
	componentDidMount() {
		localStorage.clear();
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.todos) {
				localStorage.todos = JSON.stringify(this.state.data);
			}
			if(!localStorage.count) {
				localStorage.count = 0;
			}

		} else {
			window.id = 0;
		}
	}
	
	render() {
		return (
			<div className="container">
				<Title />
				<Form addTodo={this.addTodo} />
				<List todos={this.state.data} remove={this.removeTodo} />
			</div>
		);
	}
}

export default Container;
