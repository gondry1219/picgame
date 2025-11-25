const $startbtn = document.querySelector('#startbtn'); //이벤트를 넣을 버튼 이름을 상수로 지정
const stopwatchDisplay = document.querySelector('#stopwatch'); // 초시계 시간을 표시할 요소
const $button = document.querySelector('.button'); //버튼 구역 요소
const $statusbar = document.querySelector('.statusbar'); //버튼 구역 요소


// 시작 버튼에 이벤트 리스너 추가
$startbtn.addEventListener('click', startTimer);
$startbtn.addEventListener('click', function() {console.log('시작')});

// 초시계 관련 변수 선언
let timer; // setInterval 함수의 ID를 저장할 변수
let startTime; // 타이머가 시작된 시점의 시간을 저장할 변수
let isRunning = false; // 현재 타이머가 작동 중인지 상태를 저장할 변수


// 시간을 포맷팅하는 함수 (예: 02:03.04)
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `걸린 시간 : ${minutes}:${seconds}.${centiseconds}`;
}

// 초시계를 업데이트하는 함수
function updateStopwatch() {
    // 현재 시간에서 시작 시간을 빼서 경과 시간을 밀리초 단위로 계산
    const elapsedTime = Date.now() - startTime; 
    
    // 계산된 시간을 포맷하여 화면에 표시
    stopwatchDisplay.textContent = formatTime(elapsedTime);
}

// 시작버튼 눌렀을 때 함수(타이머시작, 구역 변경경)
function startTimer() {
    if (isRunning) {
        return; // 이미 실행 중이라면 함수 종료
    }
    
    // 상태 변경
    isRunning = true; 
    $button.style.display = 'none'; // 버튼구역
    $statusbar.style.display = 'flex'; // 버튼 텍스트 변경
    
    // 시작 시간 기록 (Date.now()는 현재 시각을 밀리초 단위로 반환)
    startTime = Date.now(); 

    // 10밀리초마다 updateStopwatch 함수를 반복 실행
    timer = setInterval(updateStopwatch, 10); 
}

// 이미지를 로딩하는 함수
// function imgload()
