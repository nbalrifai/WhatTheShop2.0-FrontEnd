import { createStackNavigator } from "react-navigation-stack";
import React from "react";
// Components that represent a full screen and Not compenent of a screen

// import CoffeeBeanItem from "../components/CoffeeBeanList/";
import CoffeeBeanList from "../components/CoffeeBeanList";
import CoffeeBeanCart from "../components/CoffeeBeanCart";
import CoffeeBeanDetail from "../components/CoffeeBeanDetail";
import HistoricalOrderList from "../components/HistoricalOrderList";
import CartButton from "../components/Buttons/CartButton";
import Login from "../components/Login";
import Profile from "../components/Profile";

const BeanListStack = createStackNavigator(
  {
    BeanList: CoffeeBeanList,
    CoffeeBeanDetail: CoffeeBeanDetail,
    CoffeeBeanCart: CoffeeBeanCart,
    HistoricalOrderList: HistoricalOrderList,
    Login: Login,
    Profile: Profile
  },
  {
    initialRouteName: "BeanList",
    defaultNavigationOptions: {
      title: "Coffee Bean List",
      headerRight: <CartButton />
    }
  }
);

export default BeanListStack;
