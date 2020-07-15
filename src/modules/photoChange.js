const photoChange = () => {
    const img = document.querySelectorAll('.command__photo');
    img.forEach((item, i) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.src = e.target.dataset.img;
        });
        item.addEventListener('mouseleave', (e) => {
            e.target.src = `images/command/command-${i+1}.jpg`;
        });
    });

};

export default photoChange;