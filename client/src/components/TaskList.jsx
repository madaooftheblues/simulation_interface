import Task from './Task'

const TaskList = ({ tasks, removeTask }) => {
    return (
        <div className="task-list">
            {tasks && tasks.length <= 0 ? <span> No task added yet! </span> :
                <ul className="flex-c">
                    {tasks && tasks.map((task, index) => (
                        <li key={index}>
                            <Task
                                task={{ ...task, id: index }}
                                removeTask={() => removeTask(index)} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default TaskList
