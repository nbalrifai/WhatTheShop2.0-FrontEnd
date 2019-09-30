import { decorate, observable } from "mobx";
import axios from "axios";
import { instance } from "./authStore";
import authStore from "./authStore";

class HistoricalOrderStore {
  historicalOrder = [];
  loading = true;

  fetchAllhistoricalOrder = async () => {
    // console.log("fetchAllcoffeBean");
    try {
      let res = await instance.get(
        "http://192.168.8.132:80/api/HistoricOrder/"
      );
      let historicalOrderFromAPI = res.data;
      console.log("historic store", historicalOrderFromAPI);

      this.historicalOrder = historicalOrderFromAPI;
      // console.log("store", this.coffeeBean);

      this.loading = false;
      // console.log("[coffeeBeanStore.js]: ", this.coffeeBean);
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(HistoricalOrderStore, {
  historicalOrder: observable,
  loading: observable
});

let historicalOrderStore = new HistoricalOrderStore();
// historicalOrderStore.fetchAllhistoricalOrder();

export default historicalOrderStore;
