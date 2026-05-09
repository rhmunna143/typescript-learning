const logLength = <T extends { length: number }>(input: T): void => {
  console.log(input.length);
};

type House = {
  name?: string;
  length?: number;
  width?: number;
};

const house1 = { name: "Bagan Bari", length: 500, width: 100 };
const house2 = { name: "Bagan Bari 3" };

logLength(house1)
// logLength(house2)
