/* Part 2 */

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
    console.log(getMessage(i));
}
