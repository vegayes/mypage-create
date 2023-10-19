const modal = document.getElementById("favorite-list-modal-box");
const modalContent = document.getElementById("favorite-list-modal-content");
const openModalBtn = document.getElementById("favorite-popup-open");
const closeModalBtn = document.getElementById("fv-modal-close");
const closeModalBack = document.getElementById("fv-modal-back");

function modalOpen(){
    modal.style.display ="flex";
}

function modalClose(){

  console.log("닫기");
    modal.style.display = "none";
}


// 모달창 열기
openModalBtn.addEventListener("click", modalOpen);
// 모달창 닫기
closeModalBtn.addEventListener("click", modalClose);
closeModalBack.addEventListener("click", modalClose);





// let isDragging = false;
// let modalOffsetX;
// let modalOffsetY;
// // 모달창 드래그 시작
// modalContent.addEventListener("mousedown", (event) => {
//   isDragging = true;
//   modalOffsetX = event.offsetX;
//   modalOffsetY = event.offsetY;
// });
// // 모달창 드래그 중
// modalContent.addEventListener("mousemove", (event) => {
//   if (isDragging) {
//     const x = event.clientX - modalOffsetX;
//     const y = event.clientY - modalOffsetY;
//     modal.style.left = `${x}px`;
//     modal.style.top = `${y}px`;
//   }
// });
// // 모달창 드래그 종료
// modalContent.addEventListener("mouseup", () => {
//   isDragging = false;
// });

























// 1) 체크박스 확인
function checkAllList(e) {

  let checkCount = 0;
  document.getElementsByName("favorite-check").forEach(function(v, i) {
    if(v.checked === false){
      checkCount++;
    }
  });

  if(checkCount>0) {
    document.getElementById("favorite-check-All").checked = false;
  } else if(checkCount === 0) {
    document.getElementById("favorite-check-All").checked = true;
  }
}


//2-1)전체선택시 전체선택/ 다시 누르면 전체 해제
document.getElementById("favorite-check-All").addEventListener("click" ,function(){

  var commentAll = document.getElementById("favorite-check-All");
  var commentChecks = document.getElementsByName("favorite-check");

  for(var i = 0; i<commentChecks.length; i++){
      commentChecks[i].checked = commentAll.checked;
  }

});


//2-2)선택이 하나라도 없으면 전체 선택 취소
document.getElementsByName("favorite-check").forEach(function(v) {
  v.addEventListener('click', checkAllList);
});




