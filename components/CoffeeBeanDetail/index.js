import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase components
import {
  Thumbnail,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Item,
  Picker,
  Content,
  Input,
  Spinner
} from "native-base";
import { Image } from "react-native";

// store

import coffeeBeanStores from "../../stores/coffeeBeanStore";
import styles from "./styles";
import CartButton from "../Buttons/CartButton";
import cartStore from "../../stores/cartStore";

// Style

class CoffeeBeanDetail extends Component {
  state = {
    // Bean: []
    Quant: 1
  };

  //   SelectBean = B => {
  //     this.setState({
  //       Quant: B
  //     });
  //   };

  render() {
    const { navigation } = this.props;
    //const navigation = this.props.navigation

    const { coffeeBean, loading } = coffeeBeanStores;
    if (loading) return <Spinner />;
    const beanID = navigation.getParam("beanID");
    const bean = coffeeBean.find(bean => bean.id === beanID);
    // console.log("bean", bean);

    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text style={styles.text}>{bean.name + "\n"}</Text>

                <Text note>{bean.cataegory}</Text>
              </Body>
            </Left>
            <Right>
              <Text style={styles.text}>{bean.origin}</Text>
            </Right>
          </CardItem>

          {/* beginning of imgae part */}
          <CardItem cardBody>
            <Image
              source={{ uri: bean.image }}
              style={{ height: 200, width: 200, flex: 1 }}
            />
          </CardItem>
          {/* end of image part */}

          {/* beginning of text (Des & Price), and add to cart onPress */}
          <CardItem>
            <Left>
              <Body>
                <Text style={styles.text}>{bean.price} </Text>
              </Body>
            </Left>

            <Body>
              <Text style={styles.text}> {bean.packetize}</Text>
            </Body>
          </CardItem>

          <CardItem>
            {/* This is when you add points like full bean or grinded */}
            {/*
      <CardItem>
       <Picker
          note
          mode="dropdown"
          style={{ width: 150 }}
          selectedValue={this.state.drink}
          onValueChange={this.changeDrink}
        >
          <Picker.Item label="" value="Cappuccino" />
          
        </Picker>
        </CardItem>
       */}
            <Left>
              <Item
                rounded
                style={{
                  backgroundColor: "grey",
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                <Input
                  value={this.state.Qaunt}
                  autoCorrect={false}
                  onChangeText={Quant => this.setState({ Quant })}
                />
              </Item>
            </Left>

            <Right>
              <Button
                onPress={() =>
                  cartStore.addItemToCart({
                    cofeeBean: bean.id,
                    Quant: this.state.Quant
                  })
                }
              >
                <Text>ADD TO CART</Text>
              </Button>
            </Right>
            {/* Ending of text (Des & Price), and add to cart onPress */}
            {/*  */}
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default observer(CoffeeBeanDetail);
