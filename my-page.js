// 1) 즐겨찾기 수정 버튼 누르면
document.getElementById("favorite-popup").addEventListener("click",function(){
    window.open("http://192.168.50.200:5501/my-page-popup-favorite.html",
    "팝업 즐겨찾기",
    "width=900, height=570, top=200, left=540");
});


// document.getElementById("favorite-popup").onclick = function() {
//   // AJAX 요청을 사용하여 외부 HTML 파일의 내용을 가져옴
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "my-page-popup-favorite.html", true);
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//           // 가져온 HTML 내용을 모달 내부에 삽입
//           document.getElementById("modalContent").innerHTML = xhr.responseText;
//           // 모달 열기
//           document.getElementById("myModal").style.display = "block";
//       }
//   };
//   xhr.send();
// };

// document.getElementById("closeModalButton").onclick = function() {
//   document.getElementById("myModal").style.display = "none";
// };

// window.onclick = function(event) {
//   if (event.target === document.getElementById("myModal")) {
//       document.getElementById("myModal").style.display = "none";
//   }
// };


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





// 4) 슬라이더
const swiper = new Swiper('.swiper', {

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // spaceBetween: 10
});



// 5) 체크박스 하나만 선택하게하기 ( 성별 )
const divCheckboxes = document.querySelectorAll('.modify-gender');

// 클릭 이벤트를 처리하는 함수
function handleCheckboxInteraction() {
  const checkbox = this.querySelector('input[type="checkbox"]');
  const label = this.querySelector('label');

  // 모든 체크박스의 배경색과 레이블 색상을 초기화
  divCheckboxes.forEach((otherDiv) => {
    otherDiv.style.backgroundColor = '';
    otherDiv.querySelector('label').style.color = ''; 
  });

  // 선택된 체크박스의 배경색과 레이블 색상을 변경
  this.style.backgroundColor = 'blue';
  label.style.color = 'white';
  checkbox.checked = !checkbox.checked; // 체크박스 상태 변경
}

// 각 div 요소에 클릭 이벤트 리스너를 추가합니다.
divCheckboxes.forEach((divCheckbox) => {
  divCheckbox.addEventListener('click', handleCheckboxInteraction);
});





