import PausePlay from './PausePlay';
import Robot from './Robot';
import Object from './Object';
import Task from './Task';
import World from './World';

const Main = () => {
  const robotData = {
    robotID: 1,
    robotName: 'Robot 1',
    batteryLevel: 80,
    gripperType: 'Type A',
    currentPosition: 'Location A',
    defaultPosition: 'Location B',
  };

   const objectsData = [
    {
      objectID: 1,
      objectName: 'Object 1',
      objectLocation: 'Location X',
    },
    {
      objectID: 2,
      objectName: 'Object 2',
      objectLocation: 'Location Y',
    }
  ];


  const tasksData = [
    {
      taskID: 1,
      taskTitle: 'Task 1',
      taskDetails: 'Details of Task 1',
      robotID: 1,
      taskStatus: false,
    },
    {
      taskID: 2,
      taskTitle: 'Task 2',
      taskDetails: 'Details of Task 2',
      robotID: 1,
      taskStatus: true,
    }
  ];

  const worldData = {
    worldID: 1,
    worldName: 'World 1',
    numRobots: 5,
    numObjects: 10,
    currentTask: 'Task 1',
    humanAgents: 3,
  };

  return (
    <> 
      <PausePlay /> 

      <div className='robot-section'>
      <Robot robot={robotData} />
      </div>

      <div className='objects-section'>
      {objectsData.map((object, index) => (
        <Object key={index} object={object} />
      ))}
      </div>

        <div className='tasks-section'>
      {tasksData.map((task, index) => (
        <Task key={index} task={task} />
      ))}
      </div>

      <div className='world-section'>
      <World world={worldData} />
      </div>
    </>
  );
};

export default Main;
