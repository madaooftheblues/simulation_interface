import RobotList from './RobotList';
import SimulationControls from './SimulationControls';
import Header from './Header';
import TaskContainer from './TaskContainer';

import axios from 'axios';
import { useState } from 'react';

const API_URL = 'http://0.0.0.0:8000/';

const Main = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const talk = async (route, message) => {
    try {
      const response = await axios.post(`${API_URL}webots/${route}`, { message: message });
      console.log('Message sent:', response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const robots = [
    { name: 'sas', batteryLevel: 100, position: [1, 1] },
    { name: 'sas', batteryLevel: 100, position: [1, 1] }
  ];

  return (
    <div className="main-interface">
      <div className="left-pane">
        <RobotList robots={robots} />
      </div>
      <div className="middle-pane">
        <Header />
        <SimulationControls />
        <TaskContainer tasks={tasks} addTask={addTask} />
      </div>
      <div className="right-pane">
        {/* Removed the extra TaskContainer here */}
      </div>
    </div>
  );
};

export default Main;
