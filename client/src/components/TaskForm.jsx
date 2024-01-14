import { useState } from "react";
import LabelInput from "./LabelInput";
import LabelSelect from "./LabelSelect";
import Objects from "./Objects";

const TaskForm = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const [selectedObject, setSelectedObject] = useState(null);
    const options = ['PickPlace']
    const objects = [{ name: 'Apple' }, { name: 'Banana' }]

    return (
        <div>
            <h2>Task Form</h2>
            <form onSubmit={handleSubmit}>
                <LabelInput id='task-form-name' label='Task Name' type='text' />
                <LabelSelect id='task-form-operation' label='Operation' options={options} />
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

export default TaskForm
