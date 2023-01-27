const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', function () {
    saveScoreBtn.disabled = !username.value;
}); 
/**Gets the users score and name and saves them to local storage */

function saveHighScore(event) {
   
    event.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    }
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    swal({
        position: 'center',
        icon: 'info',
        title: 'Your score has been saved!',
        timer: 1000
    }).then(() => window.location.assign('/'));
}
