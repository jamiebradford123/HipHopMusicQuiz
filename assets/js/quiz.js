const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const progressText = document.querySelector('progressHeading');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers= true;
//Score and question counter start at 0
let score= 0
let questionCounter= 0 
let availableQuestions = []

//Questions- inspired by questions from https://www.capitalxtra.com/features/lists/hip-hop-pub-quiz-questions-best/ //
//code created with the help of the youtube tutorial https://www.youtube.com/watch?v=f4fB9Xg2JEY //
let questions = [
    {
        question:'Which 2 rappers collaborated to release the album - \'Watch the Throne\'',
        option1: 'Kanye West and Jay-Z',
        option2: 'Tupac and Biggie',
        option3: 'Drake and Future',
        option4: 'Eminem and Big Sean',
        answer: 1,
    },
    {
        question:'Eminem starred in a film about his life, what was it called?',
        option1: 'The Rise',
        option2: '8 Mile',
        option3: 'Have To Make It',
        option4: 'Can not Stop me',
        answer: 2,
    },
    {
        question:'What is the most streamed rap song on Spotify?',
        option1: 'Gold Digger by Kanye West',
        option2: 'Humble by Kendrick Lamar',
        option3: 'Rockstar By Post Malone ft 21 Savage',
        option4: 'One Dance by Drake',
        answer: 3,
    },
    {
        question:'What is the name of Drake\'s son?',
        option1: 'Ja',
        option2: 'Jimmy',
        option3: 'Russell',
        option4: 'Adonis',
        answer: 4,
    },
    {
        question:'Which one of these rappers are NOT in the group \'Migos\'?',
        option1: 'Huncho',
        option2: 'Quavo',
        option3: 'Offset',
        option4: 'Takeoff',
        answer: 1,
    },
    {
        question:'Dr Dre and Ice cube were members in which rap group?',
        option1: 'N.W.A',
        option2: 'Yeezus',
        option3: 'Boys in the Hood',
        option4: 'Loiter Squad',
        answer: 1,
    },
    {
        question:'Kanye West famously interrupted the acceptance speech of which singer at the 2009 MTV Video Music Awards?',
        option1: 'Beyonce',
        option2: 'Rihanna',
        option3: 'Nicki Manaj',
        option4: 'Taylor Swift',
        answer: 4,
    },
    {
        question:'Tupac famously had 2 large words tattooed on his chest, what were they?',
        option1: 'Hood King',
        option2: 'Love + Peace',
        option3: 'Thug Life',
        option4: 'No Regrets',
        answer: 3,
    },
    {
        question:'Which Hip Hop artist was involved the the largely controversial \'Fyre\' festival which Netflix produced a documentary about in 2019?',
        option1: 'Wiz Khalifa',
        option2: 'Ja Rule',
        option3: 'French Montana',
        option4: 'Lil Baby',
        answer: 2,
    },
    {
        question:'Abel Tesfaye goes by which stage name?',
        option1: 'The Weekday',
        option2: 'The Weeknd',
        option3: 'Friday',
        option4: 'The Day',
        answer: 2,
    }
]
// Use caps is something is to remain fixed //

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //spread oporator to get the values from the questions //
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');  //this will essentiall keep track of the score //
    }

    questionCounter++
    progressHeading.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`; //question 1 of 10, incrementing the first number //
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`; //Fill up progress bar by increments of 1/10th and calculating what question theyre on //

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) //calculate value of question index //
    currentQuestion = availableQuestions[questionsIndex] //Keep track of what question we are on //
    question.innerText = currentQuestion.question

    options.forEach(option => {
        const number = option.dataset['number']
        option.innerText = currentQuestion['option' + number]  
    })

    availableQuestions.splice(questionsIndex, 1) 

    acceptingAnswers = true
}

options.forEach(option => {
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedOption = e.target
        const selectedAnswer = selectedOption.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; //toggle green if answer correct, red if wrong
        //increase sore by one each time //
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        } 

        selectedOption.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
