import { decorate, observable } from "mobx";
import axios from "axios";
import { instance } from "./authStore";

class CoffeeBeanStore {
  coffeeBean = [];
  loading = true;

  fetchAllcoffeeBean = async () => {
    // console.log("fetchAllcoffeBean");
    try {
      let res = await instance.get(
        "http://192.168.8.132:80/api/CoffeeBeanList/"
      );
      let coffeBeansFromAPI = res.data;
      // console.log("store", coffeBeansFromAPI);

      this.coffeeBean = coffeBeansFromAPI;
      // console.log("store", this.coffeeBean);

      this.loading = false;
      // console.log("[coffeeBeanStore.js]: ", this.coffeeBean);
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CoffeeBeanStore, {
  coffeeBean: observable,
  loading: observable
});

let coffeeBeanStore = new CoffeeBeanStore();
coffeeBeanStore.fetchAllcoffeeBean();

export default coffeeBeanStore;
