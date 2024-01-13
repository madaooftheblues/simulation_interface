import Robot from './Robot'

function RobotList({ robots }) {
    return (
        <div>
            <h2> Robots </h2>
            <p>number of robots: {robots.length}</p>
            <div className='robot-list'>
                <ul className='flex-c'>
                    {robots.map((robot, index) => (
                        <li key={index}>
                            <Robot robot={{ ...robot, id: index }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RobotList;
