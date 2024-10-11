const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/;

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.textContent = 'OK';
        phoneResult.style.color = 'green';
    } else {
        phoneResult.textContent = 'NOT OK';
        phoneResult.style.color = 'red';
    }
}
//
const tabContentBlock = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items');

let currentIndex = 0;

const hideTabContent = () => {
    tabContentBlock.forEach((item) => {
        item.style.display = 'none';
    });
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index) => {
    tabContentBlock[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent(0);

setInterval(() => {
    currentIndex = (currentIndex + 1) % tabItems.length;
    hideTabContent();
    showTabContent(currentIndex);
}, 3000);

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent();
                showTabContent(index);
                currentIndex = index;
            }
        });
    }
};

