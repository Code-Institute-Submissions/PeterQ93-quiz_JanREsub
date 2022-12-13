const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/**Returns player highscore and name into an li*/
highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class='high-score'>${score.name}-${score.score}</li>`;
    })
    .join('');