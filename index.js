const print = (...params) => console.log(...params); // Because im used to python 

const readline = require('node:readline');
const Algorithim = require('./algorithim');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const ModesText = `
=============================
Modes Available:
#1: Normal
=============================
`
print(ModesText);

interface.question("Select Mode: ", async (response) => {
    switch (response.trim()) {
        case '1':
            print("Working");
            break 
        default:
            print("Exiting process. Not an available option.");
            process.exit();
        }
    }
)