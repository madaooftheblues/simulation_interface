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
  return <button onClick={handleClick}>{state ? 'play' : 'pause'}</button>;
};

const Reset = ({ url }) => {
  const [response, setResponse] = useState('');
  const sendToServer = () => {
    axios
      .get(`${url}webots/reset`)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error('Error sending string:', error);
      });
    console.log(response);
  };
  return <button onClick={sendToServer}> Reset </button>;
};

const SimulationControls = ({ url }) => {
  return (
    <>
      <Reset url={url} />
      <PausePlay url={url} />
    </>
  );
};

export default SimulationControls;
