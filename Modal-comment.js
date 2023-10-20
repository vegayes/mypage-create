//  댓글 수정 팝업 

// 1) 팝업창 띄우기
/*
const modalCM = document.getElementById("comment-update-modal-box");
const modalCMContent = document.getElementById("comment-update-content");
const openModalCMBtn = document.getElementById("cmPopup");
const closeModalCMBtn = document.getElementById("cm-modal-close");
const closeModalCMBack = document.getElementById("cm-modal-back");

function modalCMOpen(){
    modalCM.style.display ="flex";
}

function modalCMClose(){

  console.log("닫기");
    modalCM.style.display = "none";
}


// 모달창 열기
openModalCMBtn.addEventListener("click", modalCMOpen);
// 모달창 닫기
closeModalCMBtn.addEventListener("click", modalCMClose);
closeModalCMBack.addEventListener("click", modalCMClose);
*/

const openModalCmBtn = document.getElementsByClassName(".comment-list-edit");
const modalCMContent = document.getElementById("comment-update-content");
const closeModalCMBtn = document.getElementById("cm-modal-close");
const closeModalCMBack = document.getElementById("cm-modal-back");


for(let i=0 ; i< openModalCmBtn.length; i++){

	openModalCmBtn[i].addEventListener("click",() => {
      modalCMContent.style.display ="flex";
  })

  closeModalCMBtn.addEventListener("click", ()=>{
    modalCMContent.style.display ="none";
  })



}