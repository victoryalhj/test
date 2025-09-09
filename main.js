//1.유저는 숫자를 입력할수 있다/ 랜덤번호지정
//2.유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 up이라고 알려준다
//3.유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 down이라고 알려준다
//4.유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치한다면 that's right이라고 뜨고 게임 종료된다

//5.reset버튼을 누르면 게임이 초기화된다
//6.유저는 총 3번의 기회를 다쓰면 게임이 종료된다(더이상 추측불가,버튼disable)

//7.게임이 종료되면 버튼이 비활성화된다
//8.유저가 1-100범위 밖에 숫자를 입력할시에 경고 메세지가 뜬다. 기회를 깍지않는다
//9.유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다. 기회를 깍지않는다
//10.반응현 ui

let computerNum = 0;
let playBtn = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let numberArea = document.getElementById('number-area');
let numberHistory = document.getElementById('history-area')
let resetBtn = document.getElementById('reset-button');
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

playBtn.addEventListener('click',play)
resetBtn.addEventListener('click',reset);
userInput.addEventListener('focus',function(){
  userInput.value = ''
})

function pickRandomNum () {
  computerNum = Math.floor(Math.random()*100)+1
  console.log('Correct',computerNum)
  numberArea.textContent = `The number is: ${computerNum}`;
}

function play () {
  let userValue =  Number(userInput.value);

  if(userValue < 1 || userValue >100) {
    resultArea.textContent = '⚠ Enter a number between 1 and 100';
    return;
  }
  if(history.includes(userValue)){
    resultArea.textContent = '⚠ Already entered this number';
    return;
  }

  history.push(userValue);
  numberHistory.textContent = `Your Guesses: ${history}`
  console.log(history)

  //Correct
  if(userValue === computerNum){
    resultArea.textContent = 'Thats correct'
    gameOver = true;
    playBtn.disabled = true;
    return;
    }

  //False up/down
  chances -- ;
  chanceArea.textContent = `Remaining chances: ${chances}`

  if(userValue < computerNum) {
    resultArea.textContent = 'Up'
  }else {
    resultArea.textContent = 'Down'
  }

  if(chances < 1) {
    gameOver = true;
    resultArea.textContent = 'GAME OVER'
  }
  if(gameOver == true)
    playBtn.disabled = true;
}

 function reset () {
  userInput.value = '';
  pickRandomNum();
  resultArea.textContent = 'Result:'
  playBtn.disabled = false; 
  gameOver = false;

  chances = 3;
  chanceArea.textContent = `Remaining chances: ${chances}`

  history = []
  numberHistory.textContent = 'Your Guesses:'
 }

pickRandomNum()




