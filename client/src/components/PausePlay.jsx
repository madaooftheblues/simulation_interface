import { useState } from 'react';

const PausePlay = () => {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };
  return <button onClick={handleClick}>{state ? 'play' : 'pause'}</button>;
};

export default PausePlay;
