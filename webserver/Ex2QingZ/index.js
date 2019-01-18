// function in JS
function add(x, y){
    return x - y;
}

function add(a, b){
    return a + b;
}

const s1 = add(1,3);
console.log(s1);
console.log(add(1));
console.log(add(1,2,3));

console.log("arguments in function");

function addAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i ++){
        sum += arguments[i];
    }
    return sum;
}

console.log(addAll());
console.log(addAll(1,2,3));
console.log(addAll(1,2,3,4,5));

//arrow function / lambda fucntion

//(a, b) => {return a + b}

console.log("=========== arrow function ============")
const f1 = (a, b) => a + b
console.log(f1(2, 3))

const f2 = () =>{
    let a = 0;
    a = 2 + 30;
    return a;
}

console.log('f2:', f2());

const f3 = a => a * a;
console.log('f3:', f3(10))