import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.132:80/api/"
});

class CartStore {
  items = [];
  //   addItemToCart = item => this.items.push(item);

  addItemToCart = async newItem => {
    console.log("[cartStore.js] newItem: ", newItem);
    const foundItem = this.items.find(
      item => newItem.name === item.name && newItem.origin === item.origin
    );
    if (foundItem) foundItem.Quant += newItem.Quant;
    else {
      this.items.push(newItem); //FE
      // Post to BE
      try {
        await instance.post("CoffeeBeanCart/", newItem);
      } catch (err) {
        console.error(err);
      }
    }

    console.log("CARTT ITEMMS", this.items);
  };

  removeItemFromCart = item =>
    (this.items = this.items.filter(item => item !== item));

  // fetchCart

  checkoutCart = () => {
    this.items = [];
    alert(
      "Thanks for shopping with Coffee Bean Land.  We look forward to welcome You Soon ."
    );
  };

  // this is for the header
  // get quantity() {
  //   let total = 0;
  //   this.items.forEach(item => (total += item.Quant));
  //   return total;
  // }

  get totalPrice() {
    let tPrice = 0;
    this.items.forEach(item => (tPrice = item.Quant * item.price));
  }
}

decorate(CartStore, {
  items: observable,
  totalPrice: computed
  // quantity: computed
});

const cartStore = new CartStore();
export default cartStore;

// export default new CartStore();
