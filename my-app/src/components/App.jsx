import React from "react";
import Additem from "./Additem";
function App() {
  const [stext, settext] = React.useState("");
  const [newValue, setNewValue] = React.useState([]);

  function disptext(event) {
    console.log(event.target.value);
    settext(event.target.value);
  }

  function handdleclick() {
    console.log("clicked");
    setNewValue((prevItems) => {
      return [...prevItems, stext];
    });
    settext("");
  }

  function deleteitem(id) {
    setNewValue((prevItems) => {
      return prevItems.filter((newValue, Index) => {
        return Index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={disptext} type="text" value={stext} />
        <button onClick={handdleclick}>
          <span>Add</span>
        </button>
      </div>
      <ul>
        {newValue.map((todoitem, Index) => (
          <Additem
            key={Index}
            id={Index}
            value={todoitem}
            onChecked={deleteitem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
