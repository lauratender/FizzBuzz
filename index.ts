/* Part 1 */

function isChanged(n: number): boolean{
    if (n % 3 == 0)
        return true;
    if (n % 5 == 0)
        return true;
    return false;
}

function getMessage(n: number): string{
    if (n % 15 == 0)
        return "FizzBuzz";
    if (n % 3 == 0)
        return "Fizz";
    if (n % 5 == 0)
        return "Buzz";
    return "Number does not have a specific message";
}

const maxNumber: number = 100;

for (let i = 1; i <= maxNumber; i++){
    if (isChanged(i))
        console.log(getMessage(i));
    else
        console.log(i);
}