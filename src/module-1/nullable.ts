type User = {
  role: "Admin" | "User"; // union of string literal types
};

const role: User["role"] = Math.random() > 0.5 ? "User" : "Admin";

let user = role === "Admin" ? "Admin dashboard" : "User dashboard";

console.log(user);