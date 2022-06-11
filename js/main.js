const btnEmail=document.querySelectorAll('.btnEmail');
const modalConnect=document.querySelector('.modal');
const overlay=document.querySelector('.overlay')

const openModal = () => {
     modalConnect.style.display = 'block'
}

const closeModal = () => {
    modalConnect.style.display = 'none'
}
for(let i = 0; i < btnEmail.length; i++){
    btnEmail[i].addEventListener('click' , openModal);
}

overlay.onclick = closeModal;
