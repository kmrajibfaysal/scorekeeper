const heading = document.querySelector('#heading');
const p1_display = document.querySelector('#p1_score');
const p2_display = document.querySelector('#p2_score');
const p1_button = document.querySelector('#p1_button');
const p2_button = document.querySelector('#p2_button');
const reset_button = document.querySelector('#reset_button');
const play_to = document.querySelector('#play_to');

let p1_score = 0;
let p2_score = 0;
let winning_score = 3;
let isGameOver = false;

// playing option selection code!
play_to.addEventListener('change', () => {
  winning_score = parseInt(play_to.value);
  reset();
});

// player 1 button evening listener and functions
p1_button.addEventListener('click', () => {
  if (!isGameOver) {
    p1_score += 1;
    p1_display.textContent = p1_score;
  }
  if (p1_score === winning_score) {
    isGameOver = true;
    heading.textContent = 'Player 1 Wins!!';
  }
});

// player 2 button evening listener and functions
p2_button.addEventListener('click', () => {
  if (!isGameOver) {
    p2_score += 1;
    p2_display.textContent = p2_score;
  }
  if (p2_score === winning_score) {
    isGameOver = true;
    heading.textContent = 'Player 2 Wins!!';
  }
});

//   reset function

function reset() {
  isGameOver = false;
  p1_score = 0;
  p2_score = 0;
  heading.textContent = 'Play ongoing!';
  p1_display.textContent = p1_score;
  p2_display.textContent = p2_score;
  winning_score = parseInt(play_to.value);
}

reset_button.addEventListener('click', reset);
