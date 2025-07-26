// Write a function to revert every word in a string. For example:
// “the rabbit jumps” → “eht tibbar spmuj”

// I'll retyr this one

const revertWords = (string) => {
    if (!string.length) return "";

    const arrayWords = string.split(" ");
    const wordsReversed = arrayWords.map((word) => {
        const splited = word.split("");
        const indexOfDot = splited.indexOf(".");
        const reversed = [...splited];
        reversed.reverse();

        if(indexOfDot === -1) return reversed.join("");

        const result = reversed.join("").split(".")[1].split("").concat(".").join("");

        return result;
    });

    return wordsReversed.join(" ");
}

const testRevertWords = (string, expected) => {
    if(revertWords(string) === expected){
        console.log(true);
        return;
    }

    console.log(false);
}

testRevertWords("the rabbit jumps", "eht tibbar spmuj");
testRevertWords("the  rabbit  jumps", "eht  tibbar  spmuj");
testRevertWords(" the  rabbit  jumps ", " eht  tibbar  spmuj ");
testRevertWords("the rabbit can't jump", "eht tibbar t'nac pmuj");
testRevertWords("the rabbit. jump", "eht tibbar. pmuj");
