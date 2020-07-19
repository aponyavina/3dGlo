const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupContent = document.querySelector('.popup-content');

    document.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-btn')) {
            if (innerWidth >= 768) {
                let start = Date.now();
                let timer = setInterval(() => {
                    let timePassed = Date.now() - start;
                    popup.style.display = 'block';
                    popupContent.style.top = timePassed / 3 + 'px';
                    if (timePassed > 500) clearInterval(timer);
                }, 20);
            } else {
                popup.style.display = 'block';
            }
        } else return;

    });
    popup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};

export default togglePopUp;