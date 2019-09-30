import React, { Component } from "react";
import { observer } from "mobx-react";
import CoffeeBeanList from "../CoffeeBeanList/index";
import { ImageBackground } from "react-native";

import forest1 from "../../assets/images/forest1.jpg";
import styles from "../CoffeeBeanList/styles";
// NativeBase Components
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Container,
  Header
} from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { navigation } = this.props;
    if (authStore.user) navigation.replace("Profile");
    return (
      <Container>
        <ImageBackground source={forest1} style={styles.background}>
          <Item>
            <Text></Text>
          </Item>
          <Item>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button full onPress={() => authStore.login(this.state, navigation)}>
            <Text>Login</Text>
          </Button>
          <Button full onPress={() => navigation.navigate("Signup")}>
            <Text>Registration</Text>
          </Button>
        </ImageBackground>
      </Container>
    );
  }
}
export default observer(Login);
