import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const CoffeeBeanItem = ({ bean, navigation }) => {
  const handlePress = () => {
    navigation.navigate("CoffeeBeanDetail", {
      beanID: bean.id,
      beanName: bean.name
    });
  };
  // console.log("id:", bean.id);

  return (
    <ListItem button onPress={handlePress} style={styles.listitem}>
      <Card style={styles.transparent}>
        <CardItem style={styles.transparent}>
          <Left>
            <Thumbnail
              bordered
              source={{ uri: bean.image }}
              style={styles.thumbnail}
            />
            <Text style={styles.text}>{bean.name}</Text>
            <Text note style={styles.text}>
              {bean.origin}
            </Text>
          </Left>
        </CardItem>
      </Card>
    </ListItem>
  );
};

export default withNavigation(CoffeeBeanItem);
