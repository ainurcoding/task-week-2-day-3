// import fetch from 'node-fetch';

// import '/node_modules/node-fetch'
const fetch = require('node-fetch')

const getData = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();
        const dataName = data.map((item) => ({
            name: item.name
        }));

        console.log(dataName);

        // const dataName = data.map((name) => ({

        // }))
    } catch (error) {
        console.log(error);
    }
}

getData();

// "https://jsonplaceholder.typicode.com/users"



// error
// cannot use import statement outside a module

// solve
// tambahkan "type": "module" dipaling bawah package.json