export const divide = (dividend, divisor) => {
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Invalid argument!");
    }
    if (divisor === 0) {
        throw new Error("Divide by zero!");
    }
    return dividend / divisor;
}


export const toPascalCase = (sentence) => {
    return sentence
        .split(" ")
        .map((word) => {
            if (isConjuctionWord(word)) {
                return word;
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        }).join(" ");
}

const isConjuctionWord = (word) => {
    return word === "and" || word === "or";
}


export const mostFrequent = (arr, n) => {
    // Sort the array
    arr.sort();
    // find the max frequency using linear
    // traversal
    let max_count = 1,
        res = arr[0];
    let curr_count = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] === arr[i - 1]) curr_count++;
        else {
            if (curr_count > max_count) {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }

    // If last element is most frequent
    if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[n - 1];
    }
    return res;
}