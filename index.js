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
#1: $1000
=============================
`
print(ModesText);

interface.question("Select Mode: ", async (response) => {
    switch (response.trim()) {
        case '1':
            const CardsAmount = parseInt(await interface.question("How many cards do you want to be generated? "));
            let bin = "60457811425"
            const ff1 = randomnums[Math.floor(Math.random() * 10)];
            const ff2 = randomnums[Math.floor(Math.random() * 10)];
            const ff3 = randomnums[Math.floor(Math.random() * 10)];
            const ff4 = randomnums[Math.floor(Math.random() * 10)];
            const ff5 = randomnums[Math.floor(Math.random() * 10)];
            const cc = bin + ff1 + ff2 + ff3 + ff4 + ff5;
            new Algorithim().validate(cc)
            break 
        default:
            print("Exiting process. Not an available option.");
            process.exit();
        }
    }
)