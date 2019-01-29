function sum(start, end){
    let s  = 0;
    for(let i = start; i <= end; i++){
        s += i;
    }
    return s;
}

function add(a, b){
    return a+b
}

exports.fn = {
    sum,
    add
}
// exports.sum = sum; 
// exports.add = add;