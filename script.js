const loginButton = document.querySelector('input[type="submit"]');
const signupButton = document.querySelector('button');

signupButton.addEventListener('click', () => {
  // 회원가입 기능 구현
  alert('회원가입 기능은 아직 구현되지 않았습니다.');
});

loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // 기본 submit 동작 방지
  // 로그인 기능 구현
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 로그인 로직 (예시)
  if (username === 'user' && password === 'password') {
    alert('로그인 성공!');
  } else {
    alert('아이디 또는 비밀번호가 잘못되었습니다.');
  }
});