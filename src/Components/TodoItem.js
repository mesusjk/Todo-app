import React, {useState} from "react";

function TodoItem(props) {

  const [btnHover, setBtnHover] = useState(false);

  let btnRemoveStyle = {
    position: "absolute",
    top: "17px",
    right: "20px",
    color: "black",
    fontSize: "27px",
    cursor: "pointer"
  };

  if (btnHover) { btnRemoveStyle.color = "red" }
  else { btnRemoveStyle.color = "black" }

  return (
    // <li className={`${props.item.done === true ? "completed" : ""}`}>
    //     <div className="view">
    //     <input onClick={() => props.done(props.item.key)} type="checkbox" className="toggle" value="on" checked={props.item.done === true ? true : false} />
    //       <label> { props.item.text } </label>
    //       <button onClick={() => props.delete(props.item.key)}>&times;</button>
    //     </div>
    // </li>

    <li className={`${props.item.done === true ? "completed" : ""}`}>
      <div className="view">
        <input onClick={() => props.done(props.item.key)} type="checkbox" className="toggle" value="on" checked={props.item.done === true ? true : false} />
        <label> { props.item.text } </label>
        <button
        onClick={() => props.delete(props.item.key)}
        style={btnRemoveStyle}
        onMouseOver={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        >
          &times;
          </button>
      </div>
    </li>
  );
}

export default TodoItem;
