//модальное окно
const btnEmail = document.querySelectorAll('.btnEmail');
const modalConnect = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')

const openModal = () => {
    setTimeout(modalConnect.style.display = 'block', 3000)
}

const closeModal = () => {
    modalConnect.style.display = 'none'
}

for (let i = 0; i < btnEmail.length; i++) {
    btnEmail[i].addEventListener('click', openModal);
}

overlay.onclick = closeModal;

//скрол

const contactsBtn = document.querySelectorAll('.navigation a');
const contacts = document.querySelector('.contacts');
const works = document.querySelector('.work');
const home = document.querySelector('.greating')
const homeScroll = () => {
    home.scrollIntoView({ block: 'start', behavior: 'smooth' })
}
const conScroll = () => {
    contacts.scrollIntoView({ block: 'center', behavior: 'smooth' })
};
const workScroll = () => {
    works.scrollIntoView({ block: 'start', behavior: 'smooth' })
}
contactsBtn[2].addEventListener('click', conScroll);
contactsBtn[1].addEventListener('click', workScroll);
contactsBtn[0].addEventListener('click', homeScroll)




// анимации появления

const animItems = document.body.querySelectorAll('._animItem')


if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 10;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
                console.log(animItemPoint);
            }
            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_animNoRepeat')) {
                    animItem.classList.remove('_active');
                }

            }

        }
    }
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollleft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollleft }

}
setTimeout(() => {
    animOnScroll();
}, 300);

// бурнер меню
const burgerMenu = document.querySelector('.navigation');
const burgerBtn = document.getElementById('check');

burgerBtn.addEventListener('change', function () {

    if (burgerBtn.checked) {
        burgerMenu.style.right = '-5px'
    }
    else {
        burgerMenu.style.right = '-250px'
    }

})

// эфект набора`

const textanimation = () => {
    const textTechnologi = 'Испозуемые технологии:<br> -Html <br> -CSS -SCSS -SASS -LESS-Bootstrap <br>-JavaScript -REACT -WEBPACK';

    const greatingText = document.querySelector('.greatingText');
    let text1 = '';

    const input = (i) => {
        setTimeout(() => {
            text1 += textTechnologi[i]
            greatingText.innerHTML = text1
        }, 50 * i)
    }

    for (i = 0; i < textTechnologi.length - 1; i++) {
        input(i)
    }
}
let title = document.querySelector('.greatingTitle')
if (title.classList += '_active') {
    setTimeout(textanimation(), 5000);

}







