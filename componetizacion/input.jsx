function Input(props) {
    return (
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            onChange = {props.handleChange}
            {...props}
        />
    );
}

export default Input;