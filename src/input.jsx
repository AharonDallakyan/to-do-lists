function Input(props) {
    return (
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="Add your new todo"
      />
    );
  }
  
  export default Input;