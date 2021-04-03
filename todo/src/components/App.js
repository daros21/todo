import "./App.css";
import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [],
  };

  counter = 0;

  deleteTask = (id) => {
    console.log(`delete ${id}`);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  changeTaskStatus = (id) => {
    console.log(`change status ${id}`);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = !task.active;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    console.log(task, this.counter);

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    return (
      <div>
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          changeStatus={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
