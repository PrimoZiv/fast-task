import React from "react";
import { Icon } from "semantic-ui-react";
import { addTodo } from "../data";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  changeTodo = e => {
    this.setState({
      content: e.target.value
    });
  };
  addTodo = () => {
    const { content } = this.state;
    if (content.trim()) {
      addTodo({
        id: Date.now(),
        content: this.state.content,
        status: "doing",
        time: Date.now() + 1000 * 60 * 60 * 2
      });
      this.props.onComplete();
    }
  };
  render() {
    return (
      <div className="add-container">
        <div className="add-back-btn" onClick={this.props.onComplete}>
          <Icon name="chevron left" />列表
        </div>
        <div className="add-wrap">
          <textarea onChange={this.changeTodo} />
          <span className="add-btn" onClick={this.addTodo}>
            <Icon name="paper plane" />
          </span>
        </div>
      </div>
    );
  }
}

export default AddTodo;
