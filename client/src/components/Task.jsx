const Task = ({ task }) => {
    return (
      <div>
        <h2>Task ID: {task.taskID}</h2>
        <p>Title: {task.taskTitle}</p>
        <p>Details: {task.taskDetails}</p>
        <p>Assigned Robot: {task.robotID}</p>
        <p>Status: {task.taskStatus ? 'Completed' : 'Pending'}</p>
      </div>
    );
  };
  
  export default Task;