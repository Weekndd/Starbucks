


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
    opacity: 0,
    display:'none'
    });
    //to-top 버튼 보이기
    gsap.to(toTopEl,0.2, {
      x: 0
    });
  }
   else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display:'block'
      });
      //to-top 버튼 숨기기
      gsap.to('#to-top',0.2, { //toTopEl 대신에 css선택자인 to-top을 써도 되는 모씁.(사실 여러번 쓸 내용이면 낭비임)
        x: 100
      });
  }
},300));
//_.throttle(함수, 시간)

toTopEl.addEventListener('click',function() {
  gsap.to(window,0.7,{
    scrollTo: 0  //scrollTo옵션을 쓰기 위해서 cdn으로 스크롤 투 플러그인을 연결한 것임 
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1)  * 0.7, //fadeEl이라는 요소가 애니메이션을 1초동안 지속하는데 몇 초 뒤에 실행할지
    opacity: 1
  });
});

// new swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container',{
  // direction: 'horizontal' 기본값이 horizontal이기 때문에 추가할 필요 없음
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,//슬라이드 사이 여백
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000 //밀리세컨드 단위로 500 = 0.5초
  },
  pagination: {
    el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion //isHidePromotion의 값을 반대로 전환
  if(isHidePromotion){
    //숨김 처리!
    promotionEl.classList.add('hide');
  } else{
    //보임 처리! 클래스를 추가하고 지우고를 js에서 하고 나머지는 css에서
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5 , 2.5), //애니메이션 동작 시간
    {//옵션
      y:size, //y축으로 20만큼 이동
      repeat: -1, //-1로 설정하면 무한반복
      yoyo:true,
      ease: Power1.easeInOut, //gsap ease 검색해서 찾은 ease함수
      delay: random(0, delay)
    }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 저장
      triggerHook: 0.8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

