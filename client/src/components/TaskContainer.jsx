import { useState } from "react";
import PropTypes from "prop-types";
import TaskFab from "./TaskFab";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const TaskContainer = ({ tasks, addTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTaskSubmit = (task) => {
    addTask(task);
    closeModal();
  };

  return (
    <div className="task-container">
      <TaskList tasks={tasks} />
      {isModalOpen ? <div className="backdrop" onClick={closeModal}></div> : null}
      <div className={`modal ${isModalOpen ? "active" : ""}`}>
        <TaskForm onClose={closeModal} onSubmit={handleTaskSubmit} />
      </div>
      <TaskFab onClick={openModal} />
    </div>
  );
};

TaskContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default TaskContainer;
