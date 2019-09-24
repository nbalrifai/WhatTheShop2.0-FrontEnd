import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// store

import coffeeBeanStore from "../../store/coffeeBeanStore";
import CartButton from "../Buttons/CartButton";
import cartStore from "../../store/cartStore";

// Style

class CoffeeBeanDetail extends Component {
  state = {
    Quant: []
  };

  SelectQuant = Q => {
    this.setState({
      Quant: Q
    });
  };

  render() {
    const { navigation } = this.props;

    const { coffeeBean } = coffeeBeanStore;
    if (!coffeeBean) return <Content />;
    const beanID = navigation.getParam("beanID");
    const bean = bean.find(bean => bean.id === beanID);
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {bean.name + "\n"}
                <Text note>{bean.cataegory}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: bean.image }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                SelectQuant={this.state.Quant}
              ></Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button
            full
            danger
            onPress={() => cartStore.addItemToCart(this.state)}
          >
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

CoffeeDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("cafeName"),
  headerRight: <CartButton />
});

export default observer(CoffeeDetail);
