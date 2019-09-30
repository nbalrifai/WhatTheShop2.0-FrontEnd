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
  Spinner,
  Container,
  Header
} from "native-base";
// import { ImageBackground } from "react-native";
import { Image } from "react-native";

// store

import coffeeBeanStores from "../../stores/coffeeBeanStore";
import styles from "./styles";
import CartButton from "../Buttons/CartButton";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

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

  handleAdd = bean => {
    console.log(authStore.user);
    if (authStore.user) {
      cartStore.addItemToCart(
        {
          cofeeBean: bean.id,
          Quant: this.state.Quant
        },
        { ...bean, Quant: this.state.Quant }
      );
    } else {
      alert(" Please join us by Loginning In");
    }
  };

  // };

  IncrementItem = () => {
    this.setState({ Quant: this.state.Quant + 1 });
  };
  DecreaseItem = () => {
    this.setState({ Quant: this.state.Quant - 1 });
  };
  render() {
    const { navigation } = this.props;
    //const navigation = this.props.navigation

    const { coffeeBean, loading } = coffeeBeanStores;
    if (loading) return <Spinner />;
    const beanID = navigation.getParam("beanID");
    const bean = coffeeBean.find(bean => bean.id === beanID);
    // console.log("bean", bean);

    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.textName}>{bean.name + "\n"}</Text>

                  {/* <Text note>{bean.cataegory}</Text> */}
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Left>
                <Image
                  source={{ uri: bean.image }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
              </Left>
              <Right>
                <Text style={styles.textDescription}>{bean.description}</Text>
              </Right>

              {/* </CardItem>

            <CardItem> */}
            </CardItem>

            {/* beginning of imgae part */}
            {/* <CardItem cardBody>
            <Image
              source={{ uri: bean.image }}
              style={{ height: 200, width: 200, flex: 1 }}
            />
          </CardItem> */}
            {/* end of image part */}

            {/* beginning of text (Des & Price), and add to cart onPress */}
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.text}>{bean.price} </Text>
                </Body>
              </Left>

              <Right>
                <Body>
                  <Text style={styles.text}> {bean.packetize}</Text>
                </Body>
              </Right>
            </CardItem>

            <CardItem style={{ flex: 1, backgroundColor: "#deb887" }}>
              <Left>
                <Button onPress={this.DecreaseItem}>
                  <Text> - </Text>
                </Button>
              </Left>
              <Body>
                <Text style={styles.textQuant}>{this.state.Quant}</Text>
              </Body>
              <Right>
                <Button onPress={this.IncrementItem}>
                  <Text> + </Text>
                </Button>
                {/* <Text>+</Text> */}
              </Right>
              {/* Ending of text (Des & Price), and add to cart onPress */}
              {/*  */}
            </CardItem>
            <CardItem>
              <Button full onPress={() => this.handleAdd(bean)}>
                <Text>ADD ME</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CoffeeBeanDetail.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("beanName"),
    headerRight: <CartButton />
    // headerLeft: <LogoutButton />
    // };
  };
};
export default observer(CoffeeBeanDetail);
