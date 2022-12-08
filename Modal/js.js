const openModal = document.querySelector(".modal-btn");
const closeModal = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

openModal.addEventListener('click',function(){
    modalOverlay.classList.toggle("open-modal");
})

closeModal.addEventListener('click',function(){
    modalOverlay.classList.remove("open-modal");
})