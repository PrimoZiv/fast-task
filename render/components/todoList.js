import React from "react";
import { getList, changeStatus } from "../data";
import { Icon } from "semantic-ui-react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      hoverStatus: {}
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.type !== this.props.type) {
      this.fetchData();
    }
  }
  fetchData() {
    this.setState({
      list: getList(this.props.type),
      hoverStatus: {}
    });
  }
  setHover = (id, status) => {
    const { hoverStatus } = this.state;
    hoverStatus[id] = status;
    this.setState({
      hoverStatus
    });
  };
  changeStatus = id => {
    changeStatus(id);
    this.setState({
      list: getList(this.props.type)
    });
  };
  getListJsx() {
    const { list, hoverStatus } = this.state;
    return list.map((l, index) => (
      <li
        className={hoverStatus[l.id] ? "hover" : ""}
        onMouseEnter={e => {
          this.setHover(l.id, true);
        }}
        onMouseLeave={e => {
          this.setHover(l.id, false);
        }}
        key={l.id}
      >
        <div className="todoContent">{l.content}</div>
        <div
          className="todoOperation"
          onClick={e => {
            this.changeStatus(l.id);
          }}
        >
          <Icon name="check" />
        </div>
      </li>
    ));
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
