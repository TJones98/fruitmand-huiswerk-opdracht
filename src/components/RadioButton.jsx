function RadioButton({value, displayText, id, checked, onChange}) {
    return (
        <label
            className="radio-button"
        >
            <input
                type="radio"
                name="timeslot"
                value={value}
                id={id}
                checked={checked}
                onChange={onChange}
            />
            {displayText}
        </label>
    )
}

export default RadioButton;