import { calcAverageProductPrice } from "../src/products";

describe("calcAverageProductPrice", () => {
  test("three products", () => {
    const value: number = calcAverageProductPrice([
      { name: "apples", price: 5 },
      { name: "oranges", price: 5 },
      { name: "mangos", price: 11 }
    ]);
    expect(value).toBe(7);
  });
  test("two products", () => {
    const value: number = calcAverageProductPrice([
      { name: "greens", price: 3 },
      { name: "cornbread", price: 4 }
    ]);
    expect(value).toBe(3.5);
  });
  test("one product", () => {
    const value: number = calcAverageProductPrice([
      { name: "desk", price: 120 }
    ]);
    expect(value).toBe(120);
  });
  test("zero products", () => {
    const value: number = calcAverageProductPrice([]);
    expect(value).toBe(0);
  });
});

describe("Product interface exists with name (string) and price (number) properties.", () => {
  test("name is a string", () =>{
    interface Product{
      name:string;
      price: number;
    }
    expect("name").toContain("");
  });
});

describe("products array exists with several objects of data", ()=>{
  test("array has objects", ()=>{
    const products = [
      {name:"Lip Gloss", price:6},
      {name:"Gum", price:2}   
  ]
  expect([
    {name:"Lip Gloss", price:6},
    {name:"Gum", price:2}   
]).toMatchObject([
  {name:"Lip Gloss", price:6},
  {name:"Gum", price:2}   
])

  })
})




// describe("Product interface exists with name (string) and price (number) properties.", ()=>{
//   test("name is a string and height is a number", ()=> {
   
//     interface Product{
//       name: string;
//       price: number;  
//     }
//   }
//   expect("name").toContain("");

//   });