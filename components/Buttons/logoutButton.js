import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";

const LogoutButton = ({ navigation }) => {
  return (
    <Button danger onPress={() => authStore.logout(navigation)}>
      <Text style={{ color: "green" }}>Logout</Text>
      {/* <Icon name="profile" type="AntDesign" /> */}
    </Button>
  );
};

export default withNavigation(observer(LogoutButton));
