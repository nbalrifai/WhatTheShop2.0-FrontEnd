import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = ({ navigation }) => {
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CoffeeBeanCart");
    } else {
      alert(" Please join us by Loginning In");
      navigation.navigate("Login");
    }
  };
  return (
    <Button transparent onPress={handlePress}>
      <Text style={{ color: "black" }}>{cartStore.Quant}</Text>
      <Icon name="shoppingcart" type="AntDesign" />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
