import React from "react";
import Form from "../components/Form/Form";
import ListItem from "../components/ListItem/ListItem";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/todoSlice'

const App = () => {
	const [tasks, setTasks] = React.useState([
		{id: +new Date(), text: 'hello world', done: false}
	]);
	const [value, setValue] = React.useState('');
	const count = useSelector((state) => state.counter.value);
  	const dispatch = useDispatch();

	const addValue = (event) => {
		event.preventDefault();
		
		if(value.trim() !== '') {
			setTasks([...tasks, {id: +new Date(), text: value, done: false}]);
		}

		setValue('')
	};

	const removeTask = (id) => {
		setTasks(tasks.filter((item) => {
			if(item.id !== id) {
				return item
			}
		}));
	};

	const ahmadDone = (id) => {
		setTasks(tasks.map((item) => {
			if(item.id === id) {
				console.log(item);
				return {...item, done: !item.done}
			}else {
				return item;
			}
		}))	
	};

    return (
        <div className="wrapper-card">
			<Form value={value} setValue={setValue} addValue={addValue}/>

			<ul className="todo-list">
				{tasks.map((task) => {
					return <ListItem key={task.id} task={task} removeTask={removeTask} ahmadDone={ahmadDone}/>
				})}
			</ul>
		</div>
    );
}
 
export default App;