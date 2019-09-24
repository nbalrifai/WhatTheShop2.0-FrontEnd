import React, { Component } from "react";
import authStore from "../../stores/authStore";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";

class Signup extends Component {
  state = {
    username: "",
    password: ""
    // email: ""
  };
  render() {
    const { navigation } = this.props;
    if (authStore.user) navigation.replace("BeanList");

    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "white" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "grey",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={username => this.setState({ username })}
                  />
                </Item>
                <Body>
                  <Label style={{ color: "white" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>

          <Button full onPress={() => authStore.signup(this.state, navigation)}>
            <Text>Registration</Text>
          </Button>

          {/* <Button onPress={() => navigation.navigate("Signup")} full warning>
          <Text>Register</Text>
        </Button> */}
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}
export default Signup;
