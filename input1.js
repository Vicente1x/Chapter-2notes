const readline = require('readline-sync')

let answer = readline.question("Wanna hear a joke?\nYour answer:");
console.log(answer);
if (answer =="yes") {
    console.log('Why do we tell actors to break a leg, because every play has a cast.');
}


