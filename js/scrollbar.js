const navBtnCheck = document.querySelector('.site-nav-checkbox');

navBtnCheck.addEventListener('input', function () {
  if (navBtnCheck.checked === true) {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px; 
      overflow-y: scroll;
      width: 100%;`;
  } else {
    const scrollY = document.body.style.top;
    document.body.style.cssText = '';
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
  }
});