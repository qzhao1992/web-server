// import { fs } from "fs";

const fs = require('fs');

// fs.readFile('data.txt', (err, data) => {
//     if(err){
//         console.log('read error:', err);
//     }else{
//         console.log(data.toString());
//         fs.writeFile('data1.txt', data.toString() + '\nHow are you?', (err) =>{
//             if(err){
//                 console.log('Write err: ', err);
//             }else{
//                 console.log('Write successful!')
//                 fs.readFile('data1.txt', (err,data) =>{
//                     if(err){
//                         console.log('Reading data1.txt error', err)
//                     }else{
//                         console.log('RESULT: ', data.toString());
//                     }
//                 })
//             }
//         })
//     }
// })

function read_file(filename){

    const p = new Promise((resolve, reject) =>{
        fs.readFile(filename, (err,data) =>{
            if(err) reject(err);
            else resolve(data);
        })
    });

    return p;
}

function write_file(filename, data){
    const p = new Promise((resolve, reject) =>{
        fs.writeFile(filename, data, (err) =>{
            if(err) reject(err)
            else resolve('Write sucessful');
        })
    })
    return p;
}

read_file('data.txt')
    .then((result) =>{
        // console.log('result: ', result.toString());
        return write_file('data2.txt', result.toString() + '\nHello World again');
    })
    .then((result) =>{
        console.log('data2.txt is created!: ', result)
    })
    .catch((err) =>{
    console.log('Error: ', err);
})