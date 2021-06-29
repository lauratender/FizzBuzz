/* Prompt the user for a maximum number */

import * as readline from 'readline';

function changeMessage(currNr:number, div: number, previousString :string): string{
    if (currNr % div == 0){
        let addedString: string = specificMessages.get(div) || "";
        return previousString.concat(addedString);
    }
    return previousString;
}

function getMessage(currNr: number): string{
    let lastString :string = "";
    let problemDivisorsCopy :number[] = problemDivisors.slice();

    if (currNr % 17 == 0){
        problemDivisorsCopy.reverse();
    }

    for (let div of problemDivisorsCopy){
        lastString = changeMessage(currNr, div, lastString);
    }

    if (lastString == "")
        lastString = currNr.toString();

    return lastString;
}

function runSolution(): void{
    for (let i = 1; i <= maxNumber; i++){
        console.log(getMessage(i));
    }
}

const problemDivisors = [3, 5, 7, 11, 13];

const specificMessages = new Map([
    [3, "Fizz"],
    [5, "Buzz"],
    [7, "Bang"],
    [11, "Bong"],
    [13,"Fezz"]
  ]);

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var maxNumber: number;

rl.question('Type the maximum number ', (answer) => {
    maxNumber = parseInt(answer) || 100;
    runSolution()
    rl.close();
});

