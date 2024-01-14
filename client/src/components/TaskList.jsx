import Task from './Task'

const TaskList = ({ tasks, removeTask }) => {
    return (
        <div className="task-list">
            {tasks && tasks.length <= 0 ? <span> No task added yet! </span> :
                <ul className="flex-c">
                    {tasks && tasks.map((task) => (
                        <li key={task.id}>
                            <Task
                                task={task}
                                removeTask={removeTask} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default TaskList
