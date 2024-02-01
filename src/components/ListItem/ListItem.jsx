const ListItem = ({task, removeTask, ahmadDone}) => {
    return (
        <li className="todo-item ">
            <label className="todo-item-label">
                <input onChange={() => ahmadDone(task.id)} className="checkbox" type="checkbox"/>
                <span className={task.done ? 'completed' : ''}>{task.text}</span>
                <button onClick={() => removeTask(task.id)} className="btn btn-secondary btn-sm">Удалить</button>
            </label>
        </li>
    );
};

export default ListItem;
