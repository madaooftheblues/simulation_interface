import { useEffect, useState } from 'react'
import RobotList from './RobotList';
import SimulationControls from './SimulationControls';
import Header from './Header';
import TaskContainer from './TaskContainer';
import axios from 'axios';

const API_URL = 'http://0.0.0.0:8000/';
const base = 'webots/'
const url = API_URL + base

const Main = () => {
    const [robots, setRobots] = useState([])
    const [tasks, setTasks] = useState([])

    const talk = async (route, message) => {
        try {
            const response = await axios.post(url + route, { message: message });
            console.log(response)
        } catch (err) {
            console.error(err)
        }

    };

    const fetchRobots = async () => {
        try {
            const response = await axios.get(url + 'robots');
            console.log(response.data)
            setRobots(response.data)
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    const fetchTasks = async () => {
        try {
            const response = await axios.get(url + 'tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async (task) => {
        try {
            const response = await axios.post(url + 'tasks', task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const removeTask = async (id) => {
        try {
            await axios.delete(url + `tasks/${id}`);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error('Error removing task:', error);
        }
    };

    useEffect(() => {
        fetchRobots()
        fetchTasks()

        const intervali = setInterval(fetchTasks, 10000);
        const intervalj = setInterval(fetchRobots, 10000);
        return () => {
            clearInterval(intervalj)
            clearInterval(intervali)
        };
    }, [])

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
