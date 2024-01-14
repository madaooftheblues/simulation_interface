const LabelInput = ({ id, label, type, onChange }) => {
    return (
        <div className="label-input">
            <label htmlFor={id}> {label} </label>
            <input id={id} type={type} onChange={onChange}/>
        </div>
    )
}

export default LabelInput
