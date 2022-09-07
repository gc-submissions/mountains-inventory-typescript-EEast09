
export interface Product{
  name: string;
  price: number;  
}

const products = [
    {name:"Lip Gloss", price:6},
    {name:"Gum", price:2}   
]

export function calcAverageProductPrice(array: Product[]){
let total: number = 0
let average: number = 0
if(array.length>0){
    array.forEach((element)=>{
        total += element.price;
    });
    average =total / array.length;
}
return average
}
console.log("The average cost of my products is " + calcAverageProductPrice(products) + " dollars.");

