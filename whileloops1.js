const readLine = require('readline-sync');

// let y = 0;
// while (y < 25){
//     y++;
//     console.log(y)
// }

// let y = 0;
// while(y < 50){
//     y++;
//     console.log(y);
// }

// let y = -10;
// while (y <10){
//     y++;
//     console.log(y);
// }

// let y = 1;
// while (y >-50){
//     y--;
//     console.log(y);
// }











let answer = readLine.question("Enter y or n: ");
while (answer != "y" && answer != "n"){
    console.log("Invalid choice.")
    answer = readLine.question("Enter y or n: ");
}
console.log("rest of program");
