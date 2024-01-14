import { useState } from "react";
import PropTypes from 'prop-types';
import LabelInput from "./LabelInput";
import LabelSelect from "./LabelSelect";
import Objects from "./Objects";
import apple from '../assets/objects/apple.svg'
import orange from '../assets/objects/orange.svg'
import wineglass from '../assets/objects/wineglass.svg'
import soccerball from '../assets/objects/soccerball.svg'
import rubberduck from '../assets/objects/rubberduck.svg'

const TaskForm = ({ onSubmit, onClose }) => {
    const [taskName, setTaskName] = useState('');
    const [operation, setOperation] = useState('PickPlace');
    const [selectedObject, setSelectedObject] = useState(null);
    const options = ['PickPlace']
    const objects = [
        { name: 'Apple', img: apple },
        { name: 'Orange', img: orange },
        { name: 'Wineglass', img: wineglass },
        { name: 'SoccerBall', img: soccerball },
        { name: 'RubberDuck', img: rubberduck },
    ]

    const generateUniqueId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedObject === null) return;

        const newTask = {
            id: generateUniqueId(),
            name: taskName,
            operation: operation,
            target: selectedObject.name
        };

        onSubmit(newTask);
        handleFormClose();
    };

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleOperationChange = (event) => {
        setOperation(event.target.value);
    };

    const handleFormClose = () => {
        setTaskName('')
        setSelectedObject(null)
        onClose()
    }

    return (
        <div>
            <h2>Task Form</h2>
            <form onSubmit={handleSubmit}>
                <LabelInput
                    id='task-form-name'
                    label='Task Name'
                    type='text'
                    value={taskName}
                    onChange={handleTaskNameChange}
                />
                <LabelSelect
                    id='task-form-operation'
                    label='Operation'
                    options={options}
                    value={operation}
                    onChange={handleOperationChange}
                />
                <button
                    className='close-btn'
                    type="button"
                    onClick={handleFormClose}
                >
                    x
                </button>
                <Objects
                    objects={objects}
                    selectedObject={selectedObject}
                    setSelectedObject={setSelectedObject}
                />
                <div className="submit-btn-container">
                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Submit
                    </button>
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
