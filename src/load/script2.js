window.onload = function () { // 현재 웹페이지에 있는 모든 코드가 다 읽히고 다 다운로드가 끝나서 웹페이지가 완성이 되었을 시 //input태그가 실행이 된 후 이 함수가 실행된다 //따라서 이걸 쓰면 에러가 사라짐
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function () {
        alert('Hello world');
    })
}