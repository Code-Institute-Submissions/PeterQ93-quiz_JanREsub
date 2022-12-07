const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', function() {
    saveScoreBtn.disabled = !username.value;
}); 

function saveHighScore(event) {
    console.log('clicked the save button!')
    event.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score);
    console.log(highScores);

}
