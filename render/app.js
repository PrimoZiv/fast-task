import React from "react";
import TodoList from "./components/todoList";
import { Menu, Icon, Input } from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTodo: false,
      tabs: {
        doing: (
          <React.Fragment>
            <Icon name="bookmark" />进行中
          </React.Fragment>
        ),
        complete: (
          <React.Fragment>
            <Icon name="check" />已完成
          </React.Fragment>
        )
      },
      activeTab: "doing"
    };
  }
  changeTab = (e, data) => {
    this.setState({
      activeTab: data.name
    });
  };
  addTodo = e => {
    e.stopPropagation();
    this.setState({
      addTodo: true
    });
  };
  render() {
    const { activeTab, tabs, addTodo } = this.state;
    const items = Object.keys(tabs).map(t => (
      <Menu.Item key={t} name={t} content={tabs[t]} active={activeTab === t} />
    ));
    items.push(
      <Menu.Item key="add">
        <div onClick={this.addTodo}>
          <Icon name="plus" />新增
        </div>
      </Menu.Item>
    );
    return (
      <div className="app">
        {addTodo ? (
          <div className="add-wrap">
            <Input size="big" icon="send" onChange={this.addTodo} />
          </div>
        ) : (
          <div className="list">
            <Menu
              pointing
              secondary
              items={items}
              onItemClick={this.changeTab}
            />
            <TodoList type={activeTab} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
