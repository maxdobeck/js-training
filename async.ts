async function getTodos() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await resp.json();
    console.trace('printing api resp');
    console.table(json);
}

console.log(getTodos());