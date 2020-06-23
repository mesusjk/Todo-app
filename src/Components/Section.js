import React from "react";

// Components
import TodoItem from "./TodoItem";

function Section(props) {

    let filterBtn = {
        background: "lightBlue",
        fontSize: "13px",
        border: "none",
        borderRadius: "2px",
        padding: "3px 5px",
        margin: "2px",
        cursor: "pointer"
    };

    /*toggleItem() {
        // if done == false => true
        // if done == true => false
        
        
    }*/

    return (
        <section className="main">
        <ul className="todo-list">
          <TodoItem done={props.item.done} />

          <li className="completed">
            <div className="view">
              <input type="checkbox" className="toggle" value="on" checked={true} />
              <label>old work</label>
            </div>
          </li>
        </ul>

        <button style={filterBtn} type="button">All</button>
        <button style={filterBtn} type="button">Done</button>
        <button style={filterBtn} type="button">Undone</button>
      </section>
    )
}

export default Section;