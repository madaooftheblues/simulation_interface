const ObjectItem = ({ img, name, onClick, selected }) => {
    return (
        <div className={`object-item ${selected ? 'selected' : ''}`} onClick={onClick}>
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    );
};

const Objects = ({ objects, selectedObject, setSelectedObject}) => {

    return (
        <div className="objects-grid">
            {objects.map((object, i) => (
                <ObjectItem
                    key={i}
                    img={object.img}
                    name={object.name}
                    onClick={() => setSelectedObject(object)}
                    selected={object === selectedObject}
                />
            ))}
        </div>
    );
};

export default Objects;
