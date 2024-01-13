import PausePlay from './PausePlay';

const SimulationControls = ({ talk }) => {
    return (
        <div className={'sim-container'}>
            <PausePlay talk={talk} />
        </div>
    );
};

export default SimulationControls;
