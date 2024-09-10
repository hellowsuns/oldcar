const validPasswords = ['12'];  // 허용된 비밀번호 목록

function updatePassword() {
    enteredPassword = document.getElementById('password').value;
}

function checkPassword() {
    updatePassword();
    if (validPasswords.includes(enteredPassword)) {
        document.getElementById('lockscreen').style.display = 'none'; // 비밀번호 입력창 숨김
        document.getElementById('info-screen').style.display = 'block'; // 안내 문구와 버튼 표시
        document.body.style.backgroundImage = "url('unlocked_background.jpg')"; // 비밀번호 입력 후 배경이미지 변경
        document.getElementById('password').value = ''; // 비밀번호 입력창 초기화
    } else {
        alert('비밀번호가 틀렸습니다.');
    }
}

function showVideoPopup() {
    document.getElementById('video-popup').classList.remove('hidden');
    const video = document.getElementById('video-player');
    video.play(); // 팝업이 뜨면 자동으로 동영상 재생
}

function closeVideoPopup() {
    const video = document.getElementById('video-player');
    video.pause(); // 동영상 정지
    video.currentTime = 0; // 동영상 처음으로 되감기
    document.getElementById('video-popup').classList.add('hidden');
}
