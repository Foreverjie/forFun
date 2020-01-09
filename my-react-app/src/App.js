import React, { Component } from "react";
import { Button, Layout, Menu } from "antd";
import "./App.css";
import Todos from "./components/Todos";

const { Header, Content, Footer } = Layout;

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "a",
        completed: false
      },
      {
        id: 2,
        title: "b",
        completed: false
      },
      {
        id: 3,
        title: "c",
        completed: false
      }
    ]
  };

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Layout>
          <Header
            style={{ position: "fixed", zIndex: 1, width: "100%", padding: 0 }}
          >
            <div className="logo" />
            <Menu
              theme="white"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 80 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              <h1>Hello</h1>
              <Button type="primary">Button</Button>
              <Todos todos={this.state.todos} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
