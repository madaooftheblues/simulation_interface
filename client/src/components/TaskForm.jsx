import { useState } from "react";
import PropTypes from 'prop-types';
import LabelInput from "./LabelInput";
import LabelSelect from "./LabelSelect";
import Objects from "./Objects";

const TaskForm = ({ onSubmit, onClose }) => {
    const [taskName, setTaskName] = useState('');
    const [operation, setOperation] = useState('PickPlace');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            name: taskName,
            operation: operation,
        };

        onSubmit(newTask);
        onClose(); 
    };

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleOperationChange = (event) => {
        setOperation(event.target.value);
    };


    const [selectedObject, setSelectedObject] = useState(null);
    const options = ['PickPlace']
    const objects = [{ name: 'Apple' }, { name: 'Banana' }]

    return (
        <div>
            <h2>Task Form</h2>
            <form onSubmit={handleSubmit}>
                <LabelInput id='task-form-name' label='Task Name' type='text' onChange={handleTaskNameChange}/>
                <LabelSelect id='task-form-operation' label='Operation' options={options} onChange={handleOperationChange}/>
                <button className='close-btn' type="button" onClick={onClose}>
                    x
                </button>
                <Objects objects={objects} selectedObject={selectedObject} setSelectedObject={setSelectedObject} />
                <div className="submit-btn-container">
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

TaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
