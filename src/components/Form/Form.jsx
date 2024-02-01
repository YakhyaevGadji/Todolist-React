const Form = ({value, setValue, addValue}) => {
    return (
        <form onSubmit={(event) => addValue(event)} className="input-form">
			<input onChange={(e) => setValue(e.target.value)} value={value} type="text" id="newTask" placeholder="Enter text" className="form-control mr-1" />
			<button className="btn btn-primary">Добавить</button>
		</form>
    );
}
 
export default Form;