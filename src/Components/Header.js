import React, {useState} from "react";

function Header(props) {

    const [text, setText] = useState("");

    let formHandler = (e) => {
        //e.preventDefault();
        if (e.keyCode == 13) { 
            props.submit(text);
            setText("");
         }
    }

    let inputHandler = e => {
        //e.preventDefault();
        setText(e.target.value)
    }

  return (
    <header className="header">
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyDown={formHandler}
          onChange={inputHandler}
          value={text}
        />
      <h1>Todo</h1>
    </header>
  );
}

export default Header;
