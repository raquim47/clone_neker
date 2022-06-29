// nav 열렸을 때 body 스크롤바 제거
const navBtnCheck = document.querySelector('.site-nav-checkbox');
navBtnCheck.addEventListener('input', function () {
  if (navBtnCheck.checked === true) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})