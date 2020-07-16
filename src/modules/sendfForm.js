const sendfForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const input = document.querySelectorAll('input');

    document.addEventListener('input', (event) => {
        let target = event.target;
        if (target.getAttribute('name') === 'user_phone') {
            target.value = target.value.replace(/[^0-9+]/g, '');
        }
        if (target.getAttribute('name') === 'user_name' ||
            target.getAttribute('name') === 'user_message') {
            target.value = target.value.replace(/[^а-я ]/gi, '');
        }
    });

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px;';
    statusMessage.style.cssText = 'color: #fff;';

    document.addEventListener('submit', (event) => {
        let target = event.target;
        event.preventDefault();
        target.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(target);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 2000);
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
    const postData = (formData) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        });
    }
};

export default sendfForm;