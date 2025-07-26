// Write a function to revert every word in a string. For example:
// “the rabbit jumps” → “eht tibbar spmuj”

function reverseWords(phrase){
    const words = phrase.split(" ");

    const reversedWords = words.map(word => {
        const preservedParts = word.split(".");
        const reversedWord = preservedParts.map(part => part.split("").reverse().join(""));

        const finalWord = reversedWord.join(".");

        return finalWord;
    });

    return reversedWords.join(" ");
}

const testReverseWords = (string, expected) => {
    if(reverseWords(string) === expected){
        console.log(true);
        return;
    }

    console.log(false);
}

// Provided test cases
testReverseWords("hello", "olleh");
testReverseWords("the rabbit jumps", "eht tibbar spmuj");
testReverseWords("the  rabbit  jumps", "eht  tibbar  spmuj");
testReverseWords(" the  rabbit  jumps ", " eht  tibbar  spmuj ");
testReverseWords("the rabbit can't jump", "eht tibbar t'nac pmuj");
testReverseWords("the rabbit. jump", "eht tibbar. pmuj");
