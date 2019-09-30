import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from "native-base";

// Style
import styles from "./styles";

const HistoricalOrderItem = ({ Horder, navigation }) => {
  const handlePress = () => {
    navigation.navigate("HistoricalOrderItemDetail", {
      HorderID: Horder.id,
      HorderName: Horder.name
    });
  };
  // console.log("id:", bean.id);

  return (
    <ListItem button onPress={handlePress} style={styles.listitem}>
      <Card style={styles.transparent}>
        <CardItem style={styles.transparent}>
          <Text style={styles.text}>{Horder.id}</Text>
          {/* <Body>
            <Text note style={styles.text}>
              {Horder.origin}
            </Text>
            </Body> */}
        </CardItem>
      </Card>
    </ListItem>
  );
};

export default withNavigation(HistoricalOrderItem);
