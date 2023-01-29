const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/**Returns player highscore and name into an li*/
/**Page used from James Q Quick tutorial https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx */

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class='high-score'>${score.name}-${score.score}</li>`;
    })
    .join('');