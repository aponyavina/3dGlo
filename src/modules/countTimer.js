    const countTimer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const addZero = item => {
        return item < 10 ? `0${item}` : item;
    }

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = addZero(Math.floor(timeRemaining % 60)),
            minutes = addZero(Math.floor((timeRemaining / 60) % 60)),
            hours = addZero(Math.floor(timeRemaining / 60 / 60));
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    }

    const updateClock = () => {
        const timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        if (timer.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(timerId);
        };
    };

    const timerId = setInterval(updateClock, 1000);
};

export default countTimer;