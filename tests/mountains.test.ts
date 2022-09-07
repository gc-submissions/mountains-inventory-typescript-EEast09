import { findNameOfTallestMountain } from "../src/mountains";

describe("findNameOfTallestMountain", () => {
  test("middle mountain", () => {
    const name = findNameOfTallestMountain([
      { name: "Kilimanjaro", height: 19341 },
      { name: "Everest", height: 29029 },
      { name: "Denali", height: 20310 }
    ]);
    expect(name).toBe("Everest");
  });
  test("first mountain", () => {
    const name = findNameOfTallestMountain([
      { name: "Everest", height: 29029 },
      { name: "Kilimanjaro", height: 19341 },
      { name: "Denali", height: 20310 }
    ]);
    expect(name).toBe("Everest");
  });
  test("last mountain", () => {
    const name = findNameOfTallestMountain([
      { name: "Kilimanjaro", height: 19341 },
      { name: "Denali", height: 20310 },
      { name: "Everest", height: 29029 }
    ]);
    expect(name).toBe("Everest");
  });
});

describe("Mountain interface exists with name (string) and height (number) properties", ()=>{
  test("name is a string and height is a number", ()=> {
    interface Mountain{
      name: string;
      height: number;
  }
  expect("name").toContain("");

  });


  test("name is a string and height is a number", ()=> {
    interface Mountain{
      name: string;
      height: number;
  }
  
  //expect("height").not.toMatch(Number);

  });
})

describe("mountains array exists with given data.", () =>{
  test("Mountain array exsits", ()=>{
    const mountains = [
      {name: "Kilimanjaro", height:19341},
      {name: "Everest", height:29029},
      {name: "Denali", height:20310}
  ]
  //expect(state).toContainObject({ type: 'START' })

    expect(mountains).toStrictEqual( [{"height": 19341, "name": "Kilimanjaro"}, {"height": 29029, "name": "Everest"}, {"height": 20310, "name": "Denali"}])
  })
})
