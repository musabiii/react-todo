import { useState } from "react";
import "./addLine.css";

export default function AddLine({ addLine }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    if (!!title) {
      addLine(title);
      setTitle("");
    }
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="addLine">
      <input
        onKeyPress={handlePress}
        type="text"
        placeholder="add here some task"
        value={title}
        onChange={handleChange}
        className="addLine__input"
      />
      <input
        className="addLine__btn"
        type="button"
        value={"add"}
        onClick={handleAdd}
      />
    </div>
  );
}
