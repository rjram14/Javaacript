// import fetch from "node-fetch";
const nodeFetch = require('node-fetch');

// const p = new Promise((res, rej) => {
//     res("Promise Resolved!!")
// })

// async function getData() {
//     // return "Namsate";
//     return p;
// }

// const dataPromise = getData();
// console.log("data", dataPromise);

// dataPromise.then(res => console.log(res));

// const p = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise Resolved!!");
//     }, 10000);
// });

// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise Resolved!!");
//     }, 11000);
// })
const GITHUB_API_URL = "https://api.github.com/users/rjram14";
async function handlePromise() {

    try{
        const data = await fetch(GITHUB_API_URL);
        const jsonValue = await data.json()
        console.log(jsonValue);
    }
    catch {
        console.log(err);
  }


    // js engine was waiting for Promise to resolved
    // console.log("befer wait...");
    // const val = await p;
    // console.log("JavaScript In async function.");
    // console.log(val);

    // const val2 = await p1;
    // console.log(val2);
    

   
}

handlePromise()
// .catch((err)=>console.log(err))

// function getData() {
//     p.then(res => console.log(res));
//     console.log("JavaScript")
// }
// getData();





