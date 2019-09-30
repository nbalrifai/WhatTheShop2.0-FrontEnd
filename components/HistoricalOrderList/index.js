import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  Spinner,
  Content,
  List
} from "native-base";
import { ImageBackground } from "react-native";
import authStore from "../../stores/authStore";
import ENSAMBLAJE from "../../assets/images/ENSAMBLAJE.png";
import styles from "./styles";
import LogoutButton from "../Buttons/logoutButton";
import historicalOrderStore from "../../stores/historicalOrder";
import HistoricalOrderItem from "./HistoricalOrderItem";

// const Profile = ({ navigation }) => {
//   if (!authStore.user) navigation.replace("Login");

//1. change this into a class component
//2. Why? because you need componentDidMount()
//3. Inside componentDidMount, call the historicalOrderStore.fetchAllhistoricalOrder();

class HistoricalOrderList extends Component {
  async componentDidMount() {
    historicalOrderStore.fetchAllhistoricalOrder();
  }
  render() {
    if (historicalOrderStore.loading) return <Spinner />;

    let HOrderList = historicalOrderStore.historicalOrder.map(Horder => (
      <HistoricalOrderItem Horder={Horder} key={Horder.id} />
    ));
    return (
      <ImageBackground source={ENSAMBLAJE} style={styles.background}>
        <Content>
          <List>{HOrderList}</List>
        </Content>
      </ImageBackground>
    );
  }
}

HistoricalOrderList.navigationOptions = {
  title: "Historical Order",
  headerLeft: <LogoutButton />
};
export default observer(HistoricalOrderList);
