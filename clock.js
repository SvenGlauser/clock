let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let info = document.getElementById('info');
const strokeDasharray = 302;

function actual() {
    let date = new Date(Date.now());
    let hourTemp = date.getHours().toString();

    if (hourTemp >= 12) {
        hourTemp = hourTemp - 12;
        info.innerText = "PM";
    } else {
        info.innerText = "AM";
    }

    hour.querySelector('h2').innerText = hourTemp;
    hour.querySelector('.round').style.transform = 'rotate(' + hourTemp / 12 * 360 + 'deg)';
    hour.querySelector('.percent').style.strokeDashoffset = String(strokeDasharray - strokeDasharray * hourTemp / 12.0);
    let minTemp = date.getMinutes().toString();
    min.querySelector('h2').innerText = minTemp;
    min.querySelector('.round').style.transform = 'rotate(' + minTemp / 60 * 360 + 'deg)';
    min.querySelector('.percent').style.strokeDashoffset = String(strokeDasharray - strokeDasharray * minTemp / 60.0);
    let secTemp = date.getSeconds().toString();
    sec.querySelector('h2').innerText = secTemp;
    sec.querySelector('.round').style.transform = 'rotate(' + secTemp / 60 * 360 + 'deg)';
    sec.querySelector('.percent').style.strokeDashoffset = String(strokeDasharray - strokeDasharray * secTemp / 60.0);
}

setInterval(actual, 1000)

actual()

let fullscreen = document.getElementById('fullscreen');
fullscreen.addEventListener('click', function () {
    document.querySelector('html').requestFullscreen().then();
})

document.querySelector('html').addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement) {
        fullscreen.style.display = "none";
    } else {
        fullscreen.style.display = "block"
    }
})