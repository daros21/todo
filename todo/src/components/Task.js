import React from "react";

const Task = (props) => {
  const { text, date, id, active, important, finishDate } = props.task;

  const finish = new Date(finishDate).toLocaleDateString();
  return (
    <div>
      <p>
        <strong style={important && active ? { color: "red" } : null}>
          {text}
        </strong>{" "}
        - do <span>{date} </span>
        <button onClick={() => props.changeStatus(id)}>
          {active ? "Zrobione!" : "Przywroc"}
        </button>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
      {finishDate && !active && (
        <em style={{ color: "darkgreen" }}>wykonane dnia {finish}</em>
      )}
    </div>
  );
};

export default Task;
