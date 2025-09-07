//1.유저는 숫자를 입력할수 있다/ 랜덤번호지정
//2.유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 up이라고 알려준다
//3.유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 down이라고 알려준다
//4.유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치한다면 that's right이라고 뜨고 게임 종료된다
//5.유저는 총 5번의 기회를 다쓰면 게임이 종료된다
//6.게임이 종료되면 버튼이 비활성화된다
//7.reset버튼을 누르면 게임이 초기화된다
//8.유저가 1-100범위 밖에 숫자를 입력할시에 경고 메세지가 뜬다. 기회를 깍지않는다
//9.유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다. 기회를 깍지않는다
//10.반응현 ui


let computerNum = 0;
let playBtn = document.getElementById('play-button')
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')
playBtn.addEventListener('click',play)

function play() {
  let userValue = userInput.value;
  if(userValue < computerNum){
    resultArea.textContent = 'Result: Up'
  }else if(userValue > computerNum){
    resultArea.textContent = 'Result: Down'
  }else if(userValue = computerNum){
    resultArea.textContent = 'Result: Thats right'
  }
}

function pickRandomNum() {
  computerNum = Math.floor(Math.random()*100)+1;
  console.log('random',computerNum)
}
pickRandomNum()



