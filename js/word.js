const words = [
    "apple", "banana", "cherry", "grape", "orange", "strawberry", "peach",
    "melon", "pineapple", "lemon", "blueberry", "mango", "watermelon",
    "kiwi", "papaya", "coconut", "avocado", "pear", "plum", "fig", "date"
]

const getRandomWord = () => {
    const shuffleArray = [...words];
    for (let i = shuffleArray.length - 1; i >= 0; i--){
        let rand = Math.floor(Math.random() * (i + 1));
        let tmpStorage = shuffleArray[i];
        shuffleArray[i] = shuffleArray[rand];
        shuffleArray[rand] = tmpStorage;
    }
    return shuffleArray;
}

export { getRandomWord };