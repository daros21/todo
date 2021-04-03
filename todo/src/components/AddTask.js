import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    important: false,
    date: new Date().toISOString().slice(0, 10),
  };

  minDate = new Date().toISOString().slice(0, 10);

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      important: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, checked, important } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, checked, important);
      if (add) {
        this.setState({
          text: "",
          important: false,
          date: this.minDate,
        });
      }
    } else {
      alert("za krotka nazwa");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;

    maxDate = maxDate + this.minDate.slice(4, 10);
    // console.log(maxDate);
    return (
      <div>
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important">Wysokie prio</label>
        <br />
        <label htmlFor="date">Do kiedy zrobic</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
