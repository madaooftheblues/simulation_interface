const World = ({ world }) => {
    return (
      <div>
        <h2>World ID: {world.worldID}</h2>
        <p>Name: {world.worldName}</p>
        <p>Number of Robots: {world.numRobots}</p>
        <p>Number of Objects: {world.numObjects}</p>
        <p>Current Task: {world.currentTask}</p>
        <p>Human Agents: {world.humanAgents}</p>
      </div>
    );
  };
  
  export default World;