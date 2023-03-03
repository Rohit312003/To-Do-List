import React from "react";

function Additem(props) {
  return (
    <div onClick={()=>{
      props.onChecked(props.id);
    }}>
      <li>{props.value}</li>
    </div>
  );
}

export default Additem;
