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
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Profile Page",
      headerTintColor: "#006400",
      headerStyle: {
        backgroundColor: "#cd853f"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default ProfileStack;
