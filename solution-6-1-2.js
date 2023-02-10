const bttn = document.getElementById('bttn');//id속성있을때 사용한다
const nav = document.getElementById('nav');

bttn.addEventListener('click', () => { 
    nav.classList.toggle('active');//toggle()토글이란  on/off의 개념으로 스위치를 켰다,껏다하는기능이 있다
    bttn.classList.toggle('active');
});