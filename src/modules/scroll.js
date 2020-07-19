const scroll = () => {
    const scrollImg = document.querySelector('.scroll-img'),
        serviceBlock = document.getElementById('service-block'),
        menuItem = document.querySelectorAll('menu > ul > li > a'),
        scrollToBlock = (block) => {
            block.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

    menuItem.forEach((element) => {
        const idName = element.getAttribute('href').slice(1);
        const idBlock = document.getElementById(idName);
        element.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToBlock(idBlock);
        });
    });

    scrollImg.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToBlock(serviceBlock);
    });
};

export default scroll;