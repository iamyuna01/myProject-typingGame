const words = [
    "apple", "banana", "cherry", "grape", "orange", "strawberry", "peach",
    "melon", "pineapple", "lemon", "blueberry", "mango", "watermelon",
    "kiwi", "papaya", "coconut", "avocado", "pear", "plum", "fig", "date"
]

const wordCount = words.length - 1;
let currentIndex = 0;
let shuffledWords = [];

const shuffleWords = () => {
    shuffledWords = [...words];
    for (let i = shuffledWords.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[rand]] = [shuffledWords[rand], shuffledWords[i]];
    }
    currentIndex = 0;
};

const getRandomWord = () => {
    if (currentIndex < shuffledWords.length) {
        const word = shuffledWords[currentIndex];
        currentIndex++;
        return word;
    }
    shuffleWords();
    return getRandomWord(); 
};

export { getRandomWord, wordCount };