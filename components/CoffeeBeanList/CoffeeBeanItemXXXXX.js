import React, { Component } from "react";
import { ImageBackground, View, Image } from "react-native";
import { withNavigation } from "react-navigation";

import {
  ListItem,
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import styles from "./styles";

const CoffeeBeanItem = ({ bean, navigation }) => {
  const handlePress = () => {
    navigation.navigate("CoffeeBeanDetail", {
      beanID: bean.id,
      beanName: bean.name
    });
  };

  return (
    <Container>
      {/* <Header /> */}
      <Content onPress={handlePress} style={styles.listitem}>
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
              <Text style={styles.textDescription}>{bean.name}</Text>
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
          {/* <CardItem>
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
            </CardItem> */}
        </Card>
      </Content>
    </Container>
  );
};

export default withNavigation(CoffeeBeanItem);
