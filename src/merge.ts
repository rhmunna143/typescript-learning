type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const getProfile = (employee: Employee): string => {
  return `Name: ${employee.name}, Role: ${employee.role}`;
};

const employee: Employee = {
  name: "Joy",
  age: 24,
  role: "Full-stack developer",
  salary: 35000,
};

console.log(getProfile(employee));
