const quizData = [{
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '50',
    correct: 'c'
}, {
    question: 'What is the most used programming language in 2020',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
}, {
    question: 'Who is the President of Us?',
    a: 'Florin Pop',
    b: 'Donal Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b'
}, {
    question: 'What does HTML stand for?',
    a: 'Hypertext MarkUp Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Application Programming interface',
    correct: 'a'
}, {
    question: 'What year was JavaScript Launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of the Above',
    correct: 'b'
}];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // To DO: Show results
        alert('You finished!');
    }
});