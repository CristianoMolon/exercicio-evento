AOS.init();

const EventDate = new Date("Nov 12, 2024 23:55:00");
const eventTimeStamp = EventDate.getTime();

const timer = setInterval(function() {
    const now = new Date();
    const actualTimeStamp = now.getTime();

    const eventRemaningTime = eventTimeStamp - actualTimeStamp;

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;

    const daysUntilEvent = Math.floor(eventRemaningTime / day);
    const hoursUntilEvent = math.floor((eventRemaningTime % day) / hour);
    const minutesUntilEvent = math.floor((eventRemaningTime % hour) / minute);
    const secondsUntilEvent = math.floor((eventRemaningTime % minute) / 1000);

    document.getElementById('contador').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}`

    if (eventRemaningTime < 0) {
        clearInterval(timer);
        document.getElementById('contador').innerHTML = 'Já Disponível'
    }
}, 1000);