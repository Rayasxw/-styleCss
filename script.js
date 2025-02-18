const questions = [
    { question: "Что означает CSS?", answer: "Cascading Style Sheets" },
    { question: "Какое свойство изменяет цвет текста?", answer: "color" },
    { question: "Какое свойство изменяет размер шрифта?", answer: "font-size" }
];

function loadQuestions() {
    const container = document.getElementById('test-container');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('p');
        questionElement.textContent = q.question;
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = 'Введите ответ'
        inputElement.id = `answer-${index}`;
        container.appendChild(questionElement);
        container.appendChild(inputElement);
    });
}

function checkAnswers() {
    let correctAnswers = 0;
    let allAnswered = true;
    questions.forEach((q, index) => {
        const userAnswer = document.getElementById(`answer-${index}`).value.trim();
        if (userAnswer === "") {
            allAnswered = false;
        } else if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            correctAnswers++;
        }
    });
    const result = document.getElementById('result');
    if (!allAnswered) {
        result.textContent = "Пожалуйста, ответьте на все вопросы.";
    } else {
        const percentage = (correctAnswers / questions.length) * 100;
        result.textContent = `Вы правильно ответили на ${percentage}% вопросов.`;
    }
}
const button = document.getElementById('button')
button.onclick = () => checkAnswers()
window.onload = loadQuestions;