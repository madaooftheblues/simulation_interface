import Chip from './Chip';
import ur from '../assets/ur5e.png'

const Robot = ({ robot }) => {
    return (
        <div className='card' >
            <img src={ur} className='robot-img' />
            <h3>{robot.name}</h3>
            <Chip label='Robot Id' value={robot.id} />
            <Chip label='Battry Level' value={robot.batteryLevel} />
            {robot.gripperType && (<Chip label='Gripper Type' value={robot.gripperType} />)}
            <Chip label='Position' value={robot.position} />
        </div>
    );
};

export default Robot;
