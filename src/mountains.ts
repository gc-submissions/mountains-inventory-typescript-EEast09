

export interface Mountain{
    name: string;
    height: number;
}

const mountains = [
    {name: "Kilimanjaro", height:19341},
    {name: "Everest", height:29029},
    {name: "Denali", height:20310}
];

export function findNameOfTallestMountain(array: Mountain[]) {
    let tallest = array[0];
    array.forEach((element) =>{
        if(element.height > tallest.height) {
            tallest = element;
        }  

    });
    //It's working but I need to figure out how to return a string not an object.
    return tallest["name"]

}



findNameOfTallestMountain(mountains);
console.log(findNameOfTallestMountain(mountains));