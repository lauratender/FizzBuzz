/* Part 2 */

function isChanged(n: number): boolean{
    for (let div of problemDivisors){
        if (n % div == 0)
            return true;
    }
    return false;
}

function changeMessage(n:number, d: number, previousString :string): string{
    if (n % d == 0){
        let addedString: string = specificMessages.get(d) || "";
        return previousString.concat(addedString);
    }
    return previousString;
}

function getMessage(n: number): string{
    let lastString :string = "";
    let problemDivisorsCopy :number[] = problemDivisors.slice();

    if (n % 17 == 0){
        problemDivisorsCopy.reverse();
    }

    for (let div of problemDivisorsCopy){
        lastString = changeMessage(n, div, lastString);
    }
    return lastString;
}

const problemDivisors = [3, 5, 7, 11, 13];

const specificMessages = new Map([
    [3, "Fizz"],
    [5, "Buzz"],
    [7, "Bang"],
    [11, "Bong"],
    [13,"Fezz"]
  ]);

const maxNumber: number = 100;

for (let i = 1; i <= maxNumber; i++){
    if (isChanged(i))
        console.log(getMessage(i));
    else
        console.log(i);
}
