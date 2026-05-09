const product = { id: 101, name: "Keyboard", price: 50 };

function getProductProp<T, K extends keyof T>(obj: T, key: K):T[K] {
  return obj[key];
}

// Correct usage
const id = getProductProp(product, "id"); // number
const name = getProductProp(product, "name"); // string
const price = getProductProp(product, "price"); // number

console.log(id);
console.log(name);
console.log(price);

// Incorrect usage (compile-time error)
// const wrong = getProductProp(product, "cost");
// Error: Argument of type '"cost"' is not assignable to parameter of type '"id" | "name" | "price"'.
