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
      <Content style={{ backgroundColor: "#f5f5dc" }}>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 3 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "black" }}>Username</Label>
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
                  <Label style={{ color: "black" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "grey", marginTop: 10 }}
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

          <Button
            full
            color="#556b2f"
            onPress={() => authStore.signup(this.state, navigation)}
          >
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
