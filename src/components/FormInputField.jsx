function FormInputField({labelAndId, name, type, value, changeHandler}) {
    return (
        <label htmlFor={labelAndId}>
            {name}
            <input
                type={type}
                id={labelAndId}
                name={name}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
            />
        </label>
    )
}


export default FormInputField;