console.log("*********** keyword shifting **************")
var key = "This is Qing Zhao";

var keys = key.split(' ');

console.log("keys", keys)
for(let i = 0; i < keys.length-1; i++){
    let firstValue = keys[0];
    keys.shift();
    keys.push(firstValue);
    console.log("keys", keys)
}


