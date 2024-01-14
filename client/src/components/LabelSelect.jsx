
const LabelSelect = ({ id, label, options, value, onChange }) => {
    return (
        <div className="label-select">
            <label htmlFor={id}> {label} </label>
            <select
                id={id}
                className="classic"
                value={value}
                onChange={onChange}
            >
                {options && options.map((option) => <option value={option}>{option} </option>)}
            </select>
        </div>
    )
}

export default LabelSelect
