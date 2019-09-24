import { createStackNavigator } from "react-navigation-stack";
import React from "react";
// Components that represent a full screen and Not compenent of a screen

// import CoffeeBeanItem from "../components/CoffeeBeanList/";
import CoffeeBeanList from "../components/CoffeeBeanList";
import CoffeeBeanCart from "../components/CoffeeBeanCart";
import CoffeeBeanDetail from "../components/CoffeeBeanDetail";
import CartButton from "../components/Buttons/CartButton";

const BeanListStack = createStackNavigator(
  {
    BeanList: CoffeeBeanList,
    CoffeeBeanDetail: CoffeeBeanDetail,
    CoffeeBeanCart: CoffeeBeanCart
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
