import ur from '../assets/ur5e.png'
const Task = ({ task }) => {
    return (
      <div className="task">
      <div className="column">
          <img src={ur} className='robot-img' />
        </div>
        <div className="column">
          <h3> <span> Task Assigned:</span>{task.name}</h3>
          <p>Target: {task.target}</p>
        </div>
      </div>
    );
  };
  
  export default Task;
  
