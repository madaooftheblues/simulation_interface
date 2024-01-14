import Chip from './Chip';
import ur from '../assets/ur5e.png'
import pio from '../assets/pioneer.png'

const Robot = ({ robot }) => {
    const p = robot.position
    const pFormat = `(${p[0]} ${p[1]} ${p[1]})`
    const name = robot.name
    let url
    if (name.toLowerCase().startsWith('ur')) url = ur
    else if (name.toLowerCase().startsWith('pioneer')) url = pio

    return (
        <div className='card' >
            <img src={url} className='robot-img' />
            <h3>{name}</h3>
            <Chip label='Robot Id' value={robot.id} />
            {robot.gripperType && (<Chip label='Gripper Type' value={robot.gripperType} />)}
            <Chip label='Position' value={pFormat} />
        </div>
    );
};

export default Robot;
