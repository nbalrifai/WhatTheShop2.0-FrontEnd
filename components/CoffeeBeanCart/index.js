import React from "react";
import { observer } from "mobx-react";
import checkForToken from "../../stores/authStore";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { Text, ListItem, Body, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";
import CartButton from "../Buttons/CartButton";

//Store
import cartStore from "../../stores/cartStore";

const CoffeeCart = navigation => {
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
          <Text style={{ color: "blue" }}>{cartStore.totalPrice}</Text>
        </Body>
      </ListItem>

      <Button full danger onPress={() => cartStore.checkoutCart(navigation)}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

cartStore.navigationOptions = {
  title: "Coffee Bean Cart",
  headerRight: <CartButton />
  // headerLeft: <LogoutButton />
};

export default withNavigation(observer(CoffeeCart));
