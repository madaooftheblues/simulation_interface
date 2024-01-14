import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ onClose, onSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [operation, setOperation] = useState('PickPlace');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      name: taskName,
      operation: operation,
    };

    onSubmit(newTask);
    onClose(); // Close the form after submitting
  };

  return (
    <div>
      <h2>Task Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-name">Task Name:</label>
        <input
          type="text"
          name="taskName"
          id="task-name"
          value={taskName}
          onChange={handleTaskNameChange}
        />

        <label htmlFor="operation">Operation:</label>
        <select
          name="operation"
          className="classic"
          id="operation"
          value={operation}
          onChange={handleOperationChange}
        >
          <option value="PickPlace">Pick and Place</option>
        </select>

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
