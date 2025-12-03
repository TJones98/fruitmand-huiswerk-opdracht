function Button({type, clickHandler, children}) {
    return (
        <button className="text-button"
            type={type}
            onClick={clickHandler}
        >
            {children}
        </button>
    )
}

export default Button;