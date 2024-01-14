import { useEffect, useState } from 'react'
import RobotList from './RobotList';
import SimulationControls from './SimulationControls';
import Header from './Header';
import TaskContainer from './TaskContainer';
import axios from 'axios';

const API_URL = 'http://0.0.0.0:8000/';
const base = 'webots/'

const Main = () => {
    const [robots, setRobots] = useState([])
    const [tasks, setTasks] = useState([])
    const talk = async (route, message) => {
        try {
            const response = await axios.post(API_URL + base + route, { message: message });
        } catch (err) {
            console.error(err)
        }

    };

    const fetchRobots = async () => {
        try {
            const response = await axios.get(API_URL + base + 'robots');
            console.log(response.data)
            setRobots(response.data)
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    useEffect(() => fetchRobots, [])

    const addTask = (task) => {
        setTasks([...tasks, task])
    }
    const removeTask = (id) => {
        setTasks(tasks.filter((t) => t.id != id))
    }

    return (
        <div className="main-interface">
            <div className="left-pane">
                <RobotList robots={robots} />
            </div>
            <div className="middle-pane">
                <Header />
                <SimulationControls talk={talk} />
                <TaskContainer
                    tasks={tasks}
                    addTask={addTask}
                    removeTask={removeTask}
                />
            </div>
            <div className="right-pane">
            </div>
        </div>
    );
}
export default Main;
