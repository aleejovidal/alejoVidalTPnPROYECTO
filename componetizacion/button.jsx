function Button (props) {
    return (
        <button type= {props} {...props}> {props.boton} </button>
    );
}

export default Button;