const TaskForm = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <h2>Task Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='task-name'>
                    Task Name:
                </label>
                <input type="text" name="taskName" id='task-name' />
                <label htmlFor="operation">
                    Operation:
                </label>
                <select name="operation" className="classic" id='operation'>
                    <option value="PickPlace">Pick and Place</option>
                </select>
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>
                    Close
                </button>
            </form>
        </div>
    );
}

export default TaskForm
