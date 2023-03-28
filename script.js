
const storyList = document.querySelectorAll('.storyImg');
const modalBox = document.querySelector('.modal-box');
const btnClose = document.querySelector('.close-btn');
const playPause = document.querySelector('.my-btn');
const myVideo = document.querySelector('.my-video');
const modalImg = document.querySelector('.modal-story');
const storyImg = document.querySelectorAll('.storyImg');

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    loop:true,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        }
      }
  });

playPause.addEventListener('click', ()=>{
    if(playPause.innerHTML == 'Pause'){
        playPause.innerHTML = 'Play';
        myVideo.pause();
    }
    else{
        playPause.innerHTML = 'Pause';
        myVideo.play();
    }
});

for(let i=0; i<storyList.length; i++){
    storyList[i].addEventListener('click', () =>{
        mystory(storyList[i]);
        
        storyList[i].classList.add('inactive-story');
        storyList[i].classList.remove('active-story');

        btnClose.addEventListener('click', () =>{
            modalBox.classList.add('hide');
            modalBox.classList.remove('show');
        })
        modalBox.addEventListener('click', () =>{
          modalBox.classList.add('hide');
          modalBox.classList.remove('show');
      })
    });
}

function mystory(story){
    const storyImg = story.getAttribute('src');
    modalImg.setAttribute('src', storyImg);
    modalBox.classList.remove('hide');
        modalBox.classList.add('show');
}
