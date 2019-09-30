import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
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
    <ListItem button onPress={handlePress} style={styles.listitem}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{ uri: bean.image }}
              style={{ height: 150, width: 100, flex: 1 }}
            />
            <Body>
              <Text style={styles.text}>{bean.name}</Text>
            </Body>
          </Left>
        </CardItem>
        {/* <CardItem cardBody>
              <Image
                source={{ uri: "Image URL" }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem> */}
        {/* <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem> */}
      </Card>
    </ListItem>
  );
};

export default withNavigation(CoffeeBeanItem);
