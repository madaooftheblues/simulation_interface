import { useState } from 'react';
import axios from 'axios';

const PausePlay = ({ url }) => {
    const [state, setState] = useState(true);
    const [response, setResponse] = useState('');

    const sendToServer = (d) => {
        axios
            .post(`${url}webots/${d}`, { state: d })
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                console.error('Error sending string:', error);
            });
        console.log(response);
    };
    const handleClick = () => {
        setState(!state);
        sendToServer(state ? 'play' : 'pause');
    };
    return <button className='control-btn' onClick={handleClick}>{state ? 'play' : 'pause'}</button>;
};

export default PausePlay;
