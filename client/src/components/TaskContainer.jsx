import { useState } from "react";
import TaskFab from "./TaskFab"
import TaskList from "./TaskList"
import TaskForm from "./TaskForm";

const TaskContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='task-container' >
            <TaskList tasks={[]} />
            {isModalOpen ? <div className="backdrop" onClick={closeModal}></div> : null}
            <div className={`modal ${isModalOpen ? 'active' : ''}`}>
                <TaskForm onClose={closeModal} />
            </div>
            <TaskFab onClick={openModal} />
        </div>
    )
}

export default TaskContainer
