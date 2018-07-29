import React from "react";
import { getList } from "../data";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    getList(this.props.type).then(list => {
      this.setState({
        list
      });
    });
  }
  componentDidUpdate(oldProps) {
    getList(this.props.type).then(list => {
      this.setState({
        list
      });
    });
  }
  getListJsx() {
    const { list } = this.state;
    return list.map(l => <li key={l.id}>{l.content}</li>);
  }
  render() {
    const list = this.getListJsx();
    return (
      <div className="todo-list">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default TodoList;
