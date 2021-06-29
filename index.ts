/* Part 1 */

function getMessage(currNr: number): string{
    if (currNr % 15 == 0)
        return "FizzBuzz";
    if (currNr % 3 == 0)
        return "Fizz";
    if (currNr % 5 == 0)
        return "Buzz";
    return currNr.toString();
}

const maxNumber: number = 100;

for (let i = 1; i <= maxNumber; i++){
    console.log(getMessage(i));
}