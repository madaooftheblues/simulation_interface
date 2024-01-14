const LabelInput = ({ id, label, type, value, onChange }) => {
    return (
        <div className="label-input">
            <label htmlFor={id}> {label} </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    )
}

export default LabelInput
