import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://192.168.8.132:80/api/"
});

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  signup = async (userData, navigation) => {
    try {
      await instance.post("register/", userData);
      this.login(userData, navigation);
    } catch (err) {
      console.error(err);
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      await this.setUser(user.access);
      navigation.replace("BeanList");
    } catch (err) {
      console.log("something went wrong logging in");
    }
  };

  logout = navigation => {
    this.setUser();
    navigation.replace("Login");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);
      console.log("USER", user.exp);
      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        this.setUser(token);
      } else {
        console.log("I AM EXPIRED");
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
