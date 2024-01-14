import { useState } from 'react';

const PausePlay = ({talk}) => {
    const [state, setState] = useState(true);

    const sendToServer = (d) => {
        talk('control', d)
    };

    const handleClick = () => {
        setState(!state);
        sendToServer(state ? 'play' : 'pause');
    };
    return <button className='control-btn' onClick={handleClick}>{state ? 'play' : 'pause'}</button>;
};

export default PausePlay;
