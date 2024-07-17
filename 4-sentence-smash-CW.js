//https://www.codewars.com/kata/53dc23c68a0c93699800041d
// Description: Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// function smash (words) {
//     return words.join(' ')
//  };

//  console.log(smash(["this", "is", "a", "really", "long", "sentence"]))

//One-line
// const smash = (words) => words.join(' ')

// looping
function smash(words) {
    let result = '';
    for ( let i = 0; i < words.length; i++) {
        result += words[i]
        if(i != words.length - 1) result += ' '
    }

    return result;
}
console.log(smash(["this", "is", "a", "really", "long", "sentence"]))