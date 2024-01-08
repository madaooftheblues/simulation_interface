const Robot = ({ robot }) => {
  return (
    <div>
      <h2>Robot ID: {robot.robotID}</h2>
      <p>Name: {robot.robotName}</p>
      <p>Battery Level: {robot.batteryLevel}%</p>
      <p>Gripper Type: {robot.gripperType}</p>
      <p>Current Position: {robot.currentPosition}</p>
      <p>Default Position: {robot.defaultPosition}</p>
    </div>
  );
};

export default Robot;
