//1.
const user = {
  mood: "tired",
  hobby: "reading",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userKeys = Object.keys(user);
console.log(userKeys);

for (let key of userKeys) {
  console.log(key);
}


//2.
function countProps(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}
const member = {
  name: "anastasia",
  age: 15,
  hobby: "reading",
};

console.log(countProps(user));


//3.
const employees = [
  {
    lilit: 10,
    salary: 17000,
  },
  {
    adeline: 20,
    salary: 15000,
  },
  {
    emma: 30,
    salary: 12000,
  },
  {
    josef: 40,
    salary: 14500,
  },
  {
    anastasia: 50,
    salary: 10000,
  },
  {
    lili: 60,
    salary: 22000,
  },
];
function findBestEmployee(employees) {
  let totalSalary = 0;
  for (const employee of Object.key(employees)) {
    totalSalary += employee.salary;
  }
  return totalSalary;
}
console.log(findBestEmployee(employees));


//4.
function countTotalSalary(employees) {
  let total = 0;
  for (const employee of Object.values(employees)) {
    total += salaries[employee];
  }
  return total;
}
const employeeSalaries = {
    andrii: 15100,
    serhii: 14300,
    anastasia: 14500,
    tetiana: 8700
};
console.log(countTotalSalary(employees));


//6.
const basket = [
  { name: "kiwi", for1: 5 },
  { name: "apple", for1: 25 },
  { name: "cherry", for1: 100 },
  { name: "cherrry", for1: 150 },
];
function calculateTotalPrice(allProducts, productName, weight) {
  let price = 0;
  for (const product of allProducts) {
    if (product.name === productName) {
      price = product.for1 * weight;
    }
  }
  return price;
}
console.log(calculateTotalPrice(basket, "kiwi", 7));
console.log(calculateTotalPrice(basket, "cherry", 8)); 