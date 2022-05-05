const question = document.querySelector('#question');
const options = Array.from(document.getSelectorAll('.options-text'));
const progressText = document.querySelector('progressHeading'); //may not work, we'll see
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers= true
//Score and question counter start at 0
let score= 0
let questionCounter= 0 
let availableQuestions = []

//Questions
let questions = [
    {
        question:'Which 2 rappers collaborated to release the album - Watch the Throne'
        choice1: 'Kanye West and Jay-Z',
        choice2: 'Tupac and Biggie',
        choice3: 'Drake and Future',
        choice4: 'Eminem and Big Sean',
        answer: 1,
    },
    {
        question:'Eminem starred in a film about his life, what was it called?'
        choice1: 'The Rise',
        choice2: '8 Mile',
        choice3: 'Have To Make It',
        choice4: 'Can not Stop me',
        answer: 2,
    },
    {
        question:'What is the most streamed rap song on Spotify?',
        choice1: 'Gold Digger by Kanye West',
        choice2: 'Humble by Kendrick Lamar',
        choice3: 'Rockstar By Post Malone ft 21 Savage',
        choice4: 'One Dance by Drake',
        answer: 3,
    },
    {
        question:'What is the name of Drakes son?',
        choice1: 'Ja',
        choice2: 'Jimmy',
        choice3: 'Russell',
        choice4: 'Adonis',
        answer: 4,
    },
    {
        question:'Which one of these rappers are NOT in the group Migos?',
        choice1: 'Huncho',
        choice2: 'Quavo',
        choice3: 'Offset',
        choice4: 'Takeoff',
        answer: 1,
    },
    {
        question:'Dr Dre and Ice cube were members in which rap group?',
        choice1: 'N.W.A',
        choice2: 'Yeezus',
        choice3: 'Boys in the Hood',
        choice4: 'Loiter Squad',
        answer: 1,
    },
    {
        question:'Kanye West famously interrupted the acceptance speech of which singer at the 2009 MTV Video Music Awards?',
        choice1: 'Beyonce',
        choice2: 'Rihanna',
        choice3: 'Nicki Manaj',
        choice4: 'Taylor Swift',
        answer: 4,
    },
    {
        question:'Tupac famously had 2 large words tattooed on his chest, what were they?',
        choice1: 'Hood King',
        choice2: 'Love + Peace',
        choice3: 'Thug Life',
        choice4: 'No Regrets',
        answer: 3,
    },
    {
        question:'Which Hip Hop artist was involved the the largely controversial Fyre festival which Netflix produced a documentary about in 2019?',
        choice1: 'Wiz Khalifa',
        choice2: 'Ja Rule',
        choice3: 'French Montana',
        choice4: 'Lil Baby',
        answer: 2,
    },
    {
        question:'Abel Tesfaye goes by which stage name?',
        choice1: 'The Weekday',
        choice2: 'The Weeknd',
        choice3: 'Friday',
        choice4: 'The Day',
        answer: 2,
    },
]