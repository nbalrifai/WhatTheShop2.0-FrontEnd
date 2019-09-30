import React, { Component } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import coffeeBeanStore from "../../stores/coffeeBeanStore";

// Component
import CoffeeBeanItem from "./CoffeeBeanItem";
import CartButton from "../Buttons/CartButton";
// import LogoutButton from "../Buttons/LogoutButton";

const CoffeeBeanList = () => {
  const { coffeeBean, loading } = coffeeBeanStore;
  if (loading) return <Spinner />;

  const beanList = coffeeBean.map(bean => (
    <CoffeeBeanItem bean={bean} key={bean.id} />
  ));

  return (
    <Content>
      <List>{beanList}</List>
    </Content>
  );
};

CoffeeBeanList.navigationOptions = {
  title: "Coffee Bean List",
  headerRight: <CartButton />
  // headerLeft: <LogoutButton />
};

export default observer(CoffeeBeanList);
