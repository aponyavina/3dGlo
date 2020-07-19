const photoChange = () => {
    const command = document.getElementById('command');
    let srcName;
    command.addEventListener('mouseover', (e) => {
        let target = e.target;
        if (target.classList.contains('command__photo')) {
            srcName = target.getAttribute('src');
            target.src = target.dataset.img;
        }
    });
    command.addEventListener('mouseout', (e) => {
        let target = e.target;
        if (target.classList.contains('command__photo')) {
        target.src = srcName;
        }
    });
};

export default photoChange;