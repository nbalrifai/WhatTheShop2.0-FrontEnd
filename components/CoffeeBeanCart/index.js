import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, ListItem, Body, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../../stores/cartStore";

const CoffeeCart = () => {
  const { items } = cartStore;
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      {cartItems}
      <ListItem>
        <Body>
          <Text style={{ color: "white" }}>{cartStore.totalPrice}</Text>
        </Body>
      </ListItem>

      <Button full danger onPress={cartStore.checkoutCart}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

export default observer(CoffeeCart);
