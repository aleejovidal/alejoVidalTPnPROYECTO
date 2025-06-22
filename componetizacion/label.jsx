function Label (props) {
    return (
        <label htmlFor={props.label}> {props.label} </label>
    );
}

export default Label;