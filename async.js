// using https://jsonplaceholder.typicode.com
const fetch = require('node-fetch');

// synchronous example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// pending example
const resp = fetch('https://jsonplaceholder.typicode.com/todos/1');
console.info(resp);
/* this prints a pending promise, literally:
`Promise { <pending> }` */

// generates error: SyntaxError: await is only valid in async functions and the top level bodies of modules
// const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.info(resp);

async function getTodos() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await resp.json();
    console.trace('printing api resp');
    console.table(json);
}

console.log(getTodos());