console.log(1+3);

console.log('1'+ 1);

/*function addNumbers() {
    console.log(1+1);
}*/

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(3,2));


const array = [12,45,765,123,785];

function findIndex(array, number){
    return array.indexOf(number);
}
console.log(findIndex(array, 765));


//kui on loogelised sulud, siis on vaja returni
const sum2 = (a, b) => {
    return a + b;
}
console.log(sum2(19,230));

//kui on ilma loogeliste sulgudeta, siis return on taustal
const sumShort = (a, b) => a + b;
console.log(sumShort(123,10000));



function addNumbersNested(num1) {
    return function (num2) {
        return num1 + num2;
    }
}
console.log(addNumbersNested(3)(4));


const addNumbersNestedShort = (num1) => (num2) => num1 + num2;
console.log(addNumbersNestedShort(3)(12));


const hello = (name = "World") => `Hello ${name}`;
console.log(hello());
console.log(hello("Jarl"));


/*const newArray = [1,2,3,4,5];
const addedArray = newArray.map((element) => element + 5);
console.log(addedArray);*/


/*const threeParameters = newArray.map((element, index, array) => {
    console.log(element, index, array)
    return element + 5
});
console.log({threeParameters});*/ //aitab arusaada, mille value on console logitud. (threeParameters: threeParameters) on sama asi.


const Array = [1,2,3,4,5,6,7,8,9];
const filteredArray = Array.filter((element)=> element > 4);
console.log({filteredArray});


const names = ["Anni", "Mari", "Mati", "Juku"];
const objectifiedNames = names.map((name) => {
    return {
        name: name,
        age: name.length + 20,
        email: `${name}@company.com`,
        address: `${name} Street 55`,
        username: name.split("").reverse().join("")
    }
});

console.log({objectifiedNames});

/*{
    name:'Anni',
    age: 24,
    email: 'anni@company.com',
    address: 'Anni Street 55',
    username: 'innA'
}*/



let jarl = {
    name: "Jarl",
    school: "TLÜ"
};

jarl = {...jarl, height: 186};

console.log({ jarl });
//{ jarl: { name: 'Jarl', school: 'TLÜ', height: 186 } }



//async/Await ja promise näited

const myPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve("done"), 1000))
};

const runPromise = async() => {
    console.log(await myPromise());
};

runPromise();