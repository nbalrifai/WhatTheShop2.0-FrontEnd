import { createStackNavigator } from "react-navigation-stack";

// Components that represent a full screen and Not compenent of a screen

import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import SignupScreen from "../components/Signup";
import CoffeeBeanList from "../components/CoffeeBeanList";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    BeanList: CoffeeBeanList
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Coffee Bean Land"
    }
  }
);

export default ProfileStack;
