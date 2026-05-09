import printl = require("./print");

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const calculateTotal = (cartItems: CartItem): number => {
  const { price, quantity = 1 } = cartItems;

  return price * quantity;
};

const item: CartItem = {
  name: "baby doll",
  price: 300,
  quantity: 6,
};

// console.log(calculateTotal(item));

printl(calculateTotal(item));
