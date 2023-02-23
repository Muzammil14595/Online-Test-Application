const quizDB = [
    {
        question: "What is the capital of India?",
        a: "Kolkata",
        b: "Delhi",
        c: "Mumbai",
        d: "Hyderabad",
        ans: "ans2"
    },
    {
        question: "What is 2 + 2 =?",
        a: "10",
        b: "7",
        c: "4",
        d: "9",
        ans: "ans3"
    },
    {
        question: "How many hours are there in a day?",
        a: "12",
        b: "16",
        c: "5",
        d: "24",
        ans: "ans4"
    },
    {
        question: "Which day comes after Saturday?",
        a: "Sunday",
        b: "Monday",
        c: "Tuesday",
        d: "Wednesday",
        ans: "ans1"
    },
    {
        question: "Which of these is an animal?",
        a: "Mobile",
        b: "Dog",
        c: "Television",
        d: "Laptop",
        ans: "ans2"
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckedAnswer = () => {

    let answer;

    answers.forEach((currentElement) => {
        if(currentElement.checked){
            answer = currentElement.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((currentElement) => currentElement.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3> You have completed the Quiz. Your score is ${score}/${quizDB.length} </h3>
            <button class="btn" onclick = "location.reload()">Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});