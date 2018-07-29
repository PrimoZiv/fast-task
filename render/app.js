import React from "react";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";
import { Menu, Icon } from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFlag: false,
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
    const { tabs } = this.state;
    if (!tabs.hasOwnProperty(data.name)) {
      return;
    }
    this.setState({
      activeTab: data.name
    });
  };
  toggleTodo = e => {
    e && e.stopPropagation();
    const { addFlag } = this.state;
    this.setState({
      addFlag: !addFlag
    });
  };
  render() {
    const { activeTab, tabs, addFlag } = this.state;
    const items = Object.keys(tabs).map(t => (
      <Menu.Item key={t} name={t} content={tabs[t]} active={activeTab === t} />
    ));
    items.push(
      <Menu.Item key="add" active={false} onClick={this.toggleTodo}>
        <div>
          <Icon name="plus" />新增
        </div>
      </Menu.Item>
    );
    return (
      <div className="app">
        {addFlag ? (
          <AddTodo onComplete={this.toggleTodo} />
        ) : (
          <div className="list">
            <div className="todo-menu">
              <Menu
                pointing
                secondary
                items={items}
                onItemClick={this.changeTab}
              />
            </div>
            <TodoList type={activeTab} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
