let current_ms = 0;
let timeInterval;

play.addEventListener('click', () => {
    clearInterval(timeInterval);

    timeInterval = setInterval(() => {
        let [hours, mins, seconds, ms] = calculateTime(++current_ms);
        let time = `${hours<10 ? 0 : ''}${hours}:${mins<10 ? 0 : ''}${mins}:${seconds<10 ? 0 : ''}${seconds}:${ms<10 ? 0 : ''}${ms}`;
        timer.innerText = time;
    }, 10);

})


pause.addEventListener('click', () => {
    clearInterval(timeInterval);
})


restart.addEventListener('click', () => {
    current_ms = 0;
    clearInterval(timeInterval);
    timer.innerText = '00:00:00';  
})


function calculateTime(milliseconds) {
    let seconds = parseInt(milliseconds / 100);
    let mins = parseInt(seconds / 60);
    let hours = parseInt(mins / 60);

    mins = mins % 60;
    seconds = seconds % 60;
    milliseconds = milliseconds % 100;

    return [hours, mins, seconds, milliseconds];
}