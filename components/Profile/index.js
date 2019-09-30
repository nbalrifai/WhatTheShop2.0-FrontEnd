import React from "react";

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  ListItem,
  Spinner,
  Body
} from "native-base";
import { ImageBackground } from "react-native";
import authStore from "../../stores/authStore";
import XUE from "../../assets/images/XUE.png";
import styles from "../CoffeeBeanList/styles";
import LogoutButton from "../Buttons/logoutButton";
// import historicalOrderStore from "../../stores/historicalOrder";
// import HistoricalOrderItem from "./HistoricalOrderItem";

const Profile = ({ navigation }) => {
  if (!authStore.user) navigation.replace("Login");

  const handlePress = () => {
    return navigation.navigate("HistoricalOrderList");
  };
  // const HistoricalOrderList = ({ navigation }) => {
  //   const { historicalOrder, loading } = historicalOrderStore;

  //   if (loading) return <Spinner />;

  //   const HOrderList = historicalOrder.map(Horder => (
  //     <HistoricalOrderItem Horder={Horder} key={Horder.id} />
  //   ));
  return (
    <ImageBackground source={XUE} style={styles.background}>
      <Body>
        <Text></Text>

        <Text style={styles.textProfilePage}>
          Welcome Back to The finest Coffee Land
        </Text>
      </Body>
      <ListItem button onPress={() => handlePress()} style={styles.listitem}>
        <Text style={styles.textProfilePage}>
          To view your previous orders, Click here
        </Text>
      </ListItem>
    </ImageBackground>
  );
};

Profile.navigationOptions = {
  title: "Profile",
  headerLeft: <LogoutButton />
};

export default Profile;
