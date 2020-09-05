// sintaxe formal

const arr = new Array();
const arr2 = new Array(true, "Daniel", 28, new Array(2, 4, 10));

arr[0] = "Sport Recife";
arr[1] = "BVB 09"; 

console.log(arr, typeof arr); // tipo objeto
console.log(arr2);
console.log(arr2[3][arr2[3].length - 1])

// sintaxe literal

const arr3 = ["Angular", "React", "Vue"];
arr3[3] = "Jquery";
arr3.push("JS Vanilla");
console.log(arr3);

let indice = 1;
console.log(arr3[1]);