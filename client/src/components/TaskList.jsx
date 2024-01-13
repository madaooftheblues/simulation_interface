import Task from './Task'

const TaskList = ({ tasks }) => {
    return (
        <div className="task-list">
            {tasks.length <= 0 ? <span> No task added yet! </span> :
                <ul className="flex-c">
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <Task task={{ ...task, id: index }} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default TaskList
