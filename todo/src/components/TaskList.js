import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  //   const tasks = props.tasks.map((task) => (
  //     <Task
  //       key={task.id}
  //       task={task}
  //       delete={props.delete}
  //       changeStatus={props.changeStatus}
  //     />
  //   ));

  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  done.sort((a, b) => b.finishDate - a.finishDate);
  active.sort((a, b) => {
    if (a.text < b.text) return -1;
    if (a.text > b.text) return 1;
    return 0;
  });

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      changeStatus={props.changeStatus}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      changeStatus={props.changeStatus}
    />
  ));

  return (
    <>
      <div className="active">
        <h2>{`Do zrobienia: (${activeTasks.length})`}</h2>
        {activeTasks}
      </div>
      <div className="done">
        <h2>{`Zrobione: (${doneTasks.length})`}</h2>
        {doneTasks.slice(0, 2)}
      </div>
    </>
  );
};

export default TaskList;
