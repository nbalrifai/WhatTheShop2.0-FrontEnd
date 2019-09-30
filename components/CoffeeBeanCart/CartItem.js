import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      {/* X */}
      {/* X */}
      <Left>
        <Text style={{ color: "blue", marginLeft: 16 }}>
          {" "}
          {item.name + "\n"}
        </Text>
        {/* <Text note style={{ marginLeft: 16 }}>
          {item.origin}
        </Text> */}
      </Left>
      {/* x */}
      <Body>
        <Text style={{ color: "blue" }}>{item.Quant}</Text>
        {/* <Text style={{ color: "blue" }}>{cartStore.quantity}</Text> */}
      </Body>
      {/* X */}
      <Right>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" style={{ color: "blue", fontSize: 21 }} />
        </Button>
      </Right>
      {/* X */}
      {/* X */}
    </ListItem>
    // X
    //  X
  );
};

export default CartItem;
