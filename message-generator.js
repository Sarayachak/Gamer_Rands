// The following variables will store 3 different types of words : subjects, verbs and complements

let subjects = ['Sylvanas', 'World of Warcraft', 'Thrall', 'Watch Dogs 2', 'Pikachu', 'The best MMORPG ever', 'Red Ded Redemption', 'Sigmund Freud', 'The Nintendo Switch', 'This portable console', 'Lara Croft', 'Your gaming PC', 'My granny', 'Diablo III', 'Harry Potter', 'Draco Malfoy', 'My creepy Sims', 'Kirby', 'Mario and Luigi', 'God'];

let verbs = ['has', 'is', 'bakes', 'dearly loves', 'kisses', 'was', 'has', 'shamelessly loved', 'secretely is', 'free hugs', 'free hugged', 'craves', 'wants some more', 'takes drugs while watching', 'plays too much', 'drinks and drives', 'defeated by far', 'politely asked', 'politely declined'];

let complements = ['amazing DPS scores', 'disgusting space cookies', 'Britney Spears', 'the song Oops I did it again', 'Assassins Creeds life hacks', 'motherlode cheat codes to get a ferrari in real life', 'my proudest moments', 'an oversensitive camper on Call of Duty', 'a lazy warlock', 'a magnificent painting exhibition'];

let complements1 = ['while watching french TV reality shows', 'while scolding Hermione and Rons kids', 'during a way too long conference call', 'because thats what being fabulous is about', 'in Bruges for a well-deserved holiday', 'because being a vegan is way too hard', 'in order to quit smoking autumn leaves', 'since french fries are not really french', 'to replace the healer thats not doing their job'];

// Now, we will generate a random whole number, which we will use as our index for our previous arrays of strings (subject, verbs and complements)

const generateRandomIndex = array => {
    let randomIndex = Math.random() * array.length;
    return Math.floor(randomIndex);
};

// console.log('Generating a number is working')
// console.log(generateRandomIndex(verbs));

// Let's start with picking a random subject for our message!
const getRandomSubject = index => {
    index = generateRandomIndex(subjects)
    return subjects[index];
};

console.log(getRandomSubject());

// Now, we will pick a random verb for our message
const getRandomVerb = index => {
    index = generateRandomIndex(verbs)
    return verbs[index]
};

console.log(getRandomVerb());

// Let's pick a random first complement to complete our message
const getRandomFirstComplement = index => {
    index = generateRandomIndex(complements)
    return complements[index]
};

console.log(getRandomFirstComplement());

// Finally, let's pick a random second complement !
const getRandomSecondComplement = index => {
    index = generateRandomIndex(complements1)
    return complements1[index]
};

console.log(getRandomSecondComplement());


