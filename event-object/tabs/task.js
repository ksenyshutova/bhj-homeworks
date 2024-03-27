let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));
tabs.forEach((tab, index) => {
    tab.addEventListener('click', function (event) {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tab_active');
            tabContent[i].classList.remove('tab__content_active');
        }
        event.target.classList.add('tab_active');
        if (tabs[index] === event.target) {
            tabContent[index].classList.add('tab__content_active');
        }
    });
});
