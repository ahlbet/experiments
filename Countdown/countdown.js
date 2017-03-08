const userDate = document.querySelector('#userDate');
const submitButton = document.querySelector('#searchButton');
const titleDate = document.querySelector('.title-date');
submitButton.addEventListener('click', submitClock);

const clock = document.getElementById('#clock');
const daysSpan = document.querySelector('.days');
const hoursSpan = document.querySelector('.hours');
const minutesSpan = document.querySelector('.minutes');
const secondsSpan = document.querySelector('.seconds');

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function submitClock() {
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function updateClock() {

  const deadline = userDate.value;

  const t = getTimeRemaining(deadline);
  daysSpan.innerHTML = t.days;
  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

  titleDate.innerHTML = deadline;
}
