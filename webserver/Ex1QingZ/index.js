console.log("Ex1 demo");

// var let const

let x;
console.log(typeof(x));
x = 20
console.log(typeof(x));
X = 'abc';
console.log(typeof(x));
x = "xyz";
console.log(typeof(x));

x = [2,3, 'abx']; //array is a special object
console.log(typeof(x));

x = {a: 20, b: 'xyz', c:123};
console.log(typeof(x));

const PI = 3.14;
console.log("Value of PI is", PI);

//string
console.log('**************** string ******************')
let m = 'your major is computer science';
let m2 = "abcd";
console.log(m, m2);
const len = m.length;
console.log("length of m is ", len);
const loc = m.indexOf('computer');
console.log('index of computer is ', loc);

const m3 = m.substr(3, 5);
console.log(m3);

for(let i = 0; i < m.length; i++){
    console.log(m.charAt(i), m[i]);
}

for(const ch of m2){
    console.log(ch);
}

const m4 = 'a.b.c.d.e.f';
const m5 = m4.split('.')
console.log(m5);

//spread operator ...
const m6 = [...m4];
console.log(m6)

//string template
console.log('************** string template **************');
const first = 'Qing';
const last = 'Zhao';
const name = first + ' ' + last
console.log('your fullname is ', name);

const fullname = `Your full name 
    is ${first} ${last}
Hi world!
`;
console.log(fullname)
