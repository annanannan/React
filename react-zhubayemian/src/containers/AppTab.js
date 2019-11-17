import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./AppHome";
import AppInspiration from "./AppInspiration";
import AppShop from "./AppShop";
import AppMine from "./AppMine";

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={{uri:require('../images/e1.jpg')}}
            selectedIcon={{uri: require('../images/f1.jpg')}}
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:require('../images/e2.jpg')}}
            selectedIcon={{uri: require('../images/f2.jpg')}}
            title="灵感"
            key="linggan"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
          <AppInspiration />
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:require('../images/e3.jpg')}}
            selectedIcon={{uri: require('../images/f3.jpg')}}
            title="商城"
            key="Friend"
            // dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
          <AppShop />
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:require('../images/e4.jpg')}}
            selectedIcon={{uri: require('../images/f4.jpg')}}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
          <AppMine />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}