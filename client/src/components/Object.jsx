const Object = ({ object }) => {
    return (
      <div>
        <h2>Object ID: {object.objectID}</h2>
        <p>Name: {object.objectName}</p>
        <p>Location: {object.objectLocation}</p>
      </div>
    );
  };
  
  export default Object;