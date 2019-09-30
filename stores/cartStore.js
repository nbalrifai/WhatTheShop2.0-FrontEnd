import { decorate, observable, computed } from "mobx";
import axios from "axios";
import authStore, { instance } from "./authStore";

class CartStore {
  items = [];
  //   addItemToCart = item => this.items.push(item);

  addItemToCart = async (backendItem, frontendItem) => {
    console.log("frontenditem", frontendItem);
    console.log("backend", backendItem);
    console.log("[cartStore.js] this.items: ", this.items);
    const foundItem = this.items.find(
      item =>
        frontendItem.name === item.name && frontendItem.origin === item.origin
    );
    if (foundItem) foundItem.Quant += frontendItem.Quant;
    else {
      console.log("if else", frontendItem);
      this.items.push(frontendItem); //FE
      // Post to BE
      try {
        await instance.post("CoffeeBeanCart/", backendItem);
      } catch (err) {
        console.error(err);
      }
    }
  };

  removeItemFromCart = item =>
    (this.items = this.items.filter(item => item !== item));

  // fetchCart

  checkoutCart = async navigation => {
    if (authStore.user) {
      this.items = [];
      try {
        await instance.get("CheckOut/");
      } catch (err) {
        console.error(err);
      }
      alert(
        "Thanks for shopping with Coffee Bean Land.  We look forward to welcome You Soon ."
      );
    } else {
      alert(" Please join us by Loginning In");
      // await this.setUser();
      navigation.replace("Login");
    }
  };
  // this is for the header
  // get quantity() {
  //   let total = 0;
  //   this.items.forEach(item => (total += item.Quant));
  //   return total;
  // }

  get totalPrice() {
    let tPrice = 0;
    this.items.forEach(item => {
      console.log("item from map: ", item);
      console.log("item.Quant ", item.Quant);
      console.log("item.price ", item.price);
      tPrice = item.Quant * item.price;
    });

    console.log(tPrice);
    return tPrice;
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
