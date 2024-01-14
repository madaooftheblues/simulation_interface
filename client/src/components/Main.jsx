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
    const talk = async (route, message) => {
        try {
            const response = await axios.post(API_URL + base + route, { message: message });

            console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
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

    return (
        <div className="main-interface">
            <div className="left-pane">
                <RobotList robots={robots} />
            </div>
            <div className="middle-pane">
                <Header />
                <SimulationControls talk={talk}/>
                <TaskContainer />
            </div>
            <div className="right-pane">
            </div>
        </div>
    );
};

export default Main;
