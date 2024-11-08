type CountWordFunc = (sentence: string, word: string) => number;

const countWordOccurrences: CountWordFunc = (sentence, word) => {
  const lowercaseSentence = sentence.toLowerCase();
  const lowercaseWord = word.toLowerCase();

  const words = lowercaseSentence.split(" ");
  const count = words.filter((word) => word === lowercaseWord).length;
  return count;
};


console.log(countWordOccurrences("In this world we sow many dog , every dog have four lags and one tail .", "dog"))