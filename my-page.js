// 1) 즐겨찾기 수정 버튼 누르면
document.getElementById("favorite-popup").addEventListener("click",function(){
    window.open("http://192.168.50.200:5501/my-page-popup-favorite.html",
    "팝업 즐겨찾기",
    "width=900, height=570, top=200, left=540");
});


// 2) 체크박스 확인
function checkAllList(e) {

    console.log("오잉?");
    let checkCount = 0;
    document.getElementsByName("comment-check").forEach(function(v, i) {
      if(v.checked === false){
        checkCount++;
      }
    });

    if(checkCount>0) {
      document.getElementById("comment-del-All").checked = false;
    } else if(checkCount === 0) {
      document.getElementById("comment-del-All").checked = true;
    }
}


//2-1)전체선택시 전체선택/ 다시 누르면 전체 해제
document.getElementById("comment-del-All").addEventListener("click" ,function(){

    var commentAll = document.getElementById("comment-del-All");
    var commentChecks = document.getElementsByName("comment-check");

    for(var i = 0; i<commentChecks.length; i++){
        commentChecks[i].checked = commentAll.checked;
    }

});


//2-2)선택이 하나라도 없으면 전체 선택 취소
document.getElementsByName("comment-check").forEach(function(v) {
    v.addEventListener('click', checkAllList);
});


// 3) 즐겨찾기 -> 영화관, 영화 구분하기
const movieBtn = document.getElementById("movie-favorite-btn");
const cinemaBtn = document.getElementById("cinema-favorite-btn");

const favoriteMovieContainer =document.getElementById("movie-favorite-container");
const favoriteCinemaContainer =document.getElementById("cinema-favorite-container");



cinemaBtn.addEventListener("click" ,function(){
    
  console.log("영화 누름");

  cinemaBtn.style.opacity = "1";
  cinemaBtn.style.color = "black";

  movieBtn.style.opacity = "0.5";

  favoriteMovieContainer.style.display = "none";
  favoriteCinemaContainer.style.display = "";
});


movieBtn.addEventListener("click" ,function(){
    
  console.log("영화관 누름");

  cinemaBtn.style.opacity = "0.5";


  movieBtn.style.opacity = "1";
  movieBtn.style.color = "black";

  favoriteMovieContainer.style.display = "";
  favoriteCinemaContainer.style.display = "none";
});




// 4) 스크롤하기
// var swiper = new Swiper('.favorite-list', {
//   // direction: 'horizontal',
//   autoplay: true,
//   loop: true,
//   spaceBetween: 30,
//   slidesPerView: 3,
//   navigation: {
//     // prevEl: '.awards .swiper-prev',
//     nextEl: '.next-btn-container'
//   }
// });




// 5) 



