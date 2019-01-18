// asuchronous nonblocking IO

function f2() {
    console.log('f2 is called')
}

function f3() {
    console.log('f3 is called')
}

console.log("START")
setTimeout(() => {console.log('f1 is called')}, 2000)
setTimeout(() => {console.log('f2 is called')}, 0)
setTimeout(() => {console.log('f3 is called')}, 1000)
console.log("END")

