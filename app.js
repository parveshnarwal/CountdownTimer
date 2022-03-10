const newYear = '1 Jan 2023';

const daysEl =  document.getElementById('days')
const hoursEl =     document.getElementById('hours')
const minsEl =  document.getElementById('mins')
const secsEl =  document.getElementById('secs')

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds /60) % 60
    const seconds = Math.floor(totalSeconds % 60)


    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML =formatTime(mins)
    secsEl.innerHTML = formatTime(seconds)


}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

//initially calling countdown timer
countdown();

setInterval(countdown,  1000);

