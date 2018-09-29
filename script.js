//Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
function makeArrayConsecutive2(sequence) {
  return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
}
//Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
function almostIncreasingSequence(sequence) {
    for (let i = 0; i < sequence.length ; i++) {
        let tmpSequence = sequence.slice();
        tmpSequence.splice(i, 1);
        if (isIncreasingSequence(tmpSequence)) {
            return true;
        }
    }
    return false;
}
function isIncreasingSequence(sequence) {
    for (let i = 0; i < sequence.length ; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            return false;
        }
    }
    return true;
}
//Given an array of strings, return another array containing all of its longest strings.
function inputarr(inputArray) {
    let newArr= [];
    let zeroOfarrLenght = 0;
    for (let i = 0 ; i < inputArray.length; i++) {
        if (inputArray[i].length >= 3) {
        newArr.push(inputArray[i])
        }
    }
    return newArr;
}