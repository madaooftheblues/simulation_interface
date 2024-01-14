import manipulator from '../assets/manipulator.png'
import apple from '../assets/objects/apple.svg'
import orange from '../assets/objects/orange.svg'
import wineglass from '../assets/objects/wineglass.svg'
import soccerball from '../assets/objects/soccerball.svg'
import rubberduck from '../assets/objects/rubberduck.svg'
import Chip from './Chip'

const Task = ({ task, removeTask }) => {
    const iconsMap = {
        Apple: apple,
        Wineglass: wineglass,
        Orange: orange,
        RubberDuck: rubberduck,
        SoccerBall: soccerball
    };
    return (
        <div className="task">
            <div className='task-img-container'>
                <img src={manipulator} className='task-img' />
                <img src={iconsMap[task.target]} className='task-img' />
            </div>
            <div className="task-info">
                <h3>{task.name}</h3>
                <Chip label='PickPlace' value={task.target} />
            </div>
            <button
                className='close-btn'
                type="button"
                onClick={() => removeTask(task.id)}
            >
                x
            </button>
        </div>
    );
};

export default Task;

