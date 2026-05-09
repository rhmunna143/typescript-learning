type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

const user1: UserResponse = {};

const user2: UserResponse = {
  info: {
    address: {
      zipCode: "7000",
    },
  },
};

const getZipCode = (user: UserResponse): string => {
  const zipCode = user?.info?.address?.zipCode ?? "00000";

  return zipCode;
};

console.log(getZipCode(user1));
console.log(getZipCode(user2));
