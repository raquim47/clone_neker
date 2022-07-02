// 좌표 백분율 구하기
function getPercent(element) {
  const coordinate = element.getBoundingClientRect();
  return coordinate['y'] / window.innerHeight;
}

// 메인 타이틀 투명도 변화
const setOpacityTitle = () => {
  const mainTitle = document.querySelector('.main__title');
  const mainTitlePercent = getPercent(mainTitle);
  const opacityH = (mainTitlePercent) * 10 / 4;

  if (mainTitlePercent < 0.4 && mainTitlePercent > 0) {
    mainTitle.style.opacity = opacityH;
  }
};

// story 섹션 진입시 video dim 등장
const setOpacityDim = () => {
  const storyDim = document.querySelector('.video__dim');
  const storyBlock = document.querySelector('.story');
  const skincareBlock = document.querySelector('.skincare');
  const footer = document.querySelector('footer');

  const storyBlockPercent = getPercent(storyBlock);
  const skincareBlockPercent = getPercent(skincareBlock);
  const footerPercent = getPercent(footer);

  if (storyBlockPercent < 0.85) {
    storyDim.style.opacity = 0.8;
  } else {
    storyDim.style.opacity = 0;
  }

  if (skincareBlockPercent < 0.3) {
    storyDim.style.opacity = 0;
  }

  if (footerPercent < 0.9) {
    storyDim.style.opacity = 0.8;
  }
}

// 카드 내부 움직이는 이미지 (스크롤 높이 따라서)
const imgInto = document.querySelectorAll('.img-into');

const setTransitionImg = (elements) => {
  elements.forEach((element) => {
    const imgIntoPercentage = getPercent(element);
    const translateXY = (imgIntoPercentage) * 50 - 15;

    if (imgIntoPercentage < 0.7 && imgIntoPercentage > 0.3) {
      element.style.transform = `translate(${translateXY}%, ${translateXY}%)`;
    }
  })
};

// 스토리 섹션 카드 이미지 크기 조절
const storyCardBg = document.querySelectorAll('.card-bg');

const setCardBgScale = (elements) => {
  elements.forEach((element) => {
    const storyCardPercentage = getPercent(element);
    const scaleBg = storyCardPercentage * -100 + 180
    if (storyCardPercentage < 0.7 && storyCardPercentage > 0.3) {
      element.style.backgroundSize = `${scaleBg}%`
    }
  })
}

// 카드 내부 텍스트 등장
const showUpElem = document.querySelectorAll('.show-up');

const setTextShow = (elements) => {
  elements.forEach((element) => {
    const precentageText = getPercent(element);

    if (precentageText < 0.85) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
};

// 위로 움직이는 카드 아이템
const moveUpElem = document.querySelectorAll('.move-up');

const setTransitionCard = (elements) => {
  elements.forEach((element) => {
    const precentageCard = getPercent(element);

    if (precentageCard < 0.95) {
      element.style.transform = 'translateY(0)';
    }
  });
};

const scrollTransitions = () => {
  setOpacityTitle();
  setOpacityDim();
  setHeaderShow();
  setTransitionImg(imgInto);
  setTransitionCard(moveUpElem);
  setTextShow(showUpElem);
  setCardBgScale(storyCardBg);
};

window.addEventListener('scroll', scrollTransitions);

// 헤더 보이기 숨기기
let prevScrollTop = 0;

const setHeaderShow = () => {
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;
  // 마지막스크롤위치
  const lastScrollTop = window.pageYOffset;

  if (lastScrollTop > prevScrollTop) {
    header.style.transform = `translateY(-${headerHeight}px)`
  } else {
    header.style.transform = `translateY(0)`
  }
  prevScrollTop = lastScrollTop;
}