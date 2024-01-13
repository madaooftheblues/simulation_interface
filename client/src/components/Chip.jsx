const Chip = ({ label, value }) => {
    return (
        <div className='chip'>
            <span>{label}</span>
            <span>{value}</span>
        </div>
    )
}

export default Chip
