document.addEventListener('DOMContentLoaded', function () {

    function checkAnswer() {
        const correctAnswer = '4';

        const answer = document.querySelector('[name="quiz"]:checked');

        if (!answer) {
            document.getElementById('feedback').textContent = "Please select an answer.";
            return;
        }

        const userAnswer = answer.value;

        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    }

    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
});
