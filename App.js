import React, { Component } from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation";
import authStore from "./stores/authStore";

export default class App extends Component {
  async componentDidMount() {
    await authStore.checkForToken();
  }
  render() {
    return <AppContainer />;
  }
}
