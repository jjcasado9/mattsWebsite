

let time_window = 1000 * 60 * 1;
let startTime = new Date();

const moon = document.querySelector('.moon'); 
const sun = document.querySelector('.sun'); 

let windowWidth = window.innerWidth;
let moon_width = parseInt(moon.clientWidth, 10) * 100 / windowWidth;
let sun_width = parseInt(sun.clientWidth, 10) * 100 / windowWidth;


window.onresize = function() {
  //Be careful about calculating too many things in the resize handler!
  //This isn't that intensive, so it shouldn't matter, but look into "debouncing" if you have things like this elsewhere
  moon_width = parseInt(moon.clientWidth, 10) * 100 / windowWidth;
  sun_width = parseInt(sun.clientWidth, 10) * 100 / windowWidth;
  windowWidth = window.innerWidth;
};

function runDay() {


    let now = (Date.now() - startTime) % time_window;

    let offsety = -Math.sin((now) * (2 * Math.PI / (time_window * 2))) * 60 + 100;
    let offsetx = -Math.cos((now) * (2 * Math.PI / (time_window * 2))) * 50 + 50 - sun_width / 2;
    let offsetymoon = -Math.sin(now * (2 * Math.PI / (time_window * 0.4))) * 60 + 100;
    let offsetxmoon = -Math.cos(now * (2 * Math.PI / (time_window * 0.4))) * 50 + 50 - moon_width / 2;

    /*Solar Eclipse */
    if (Math.abs(offsety - offsetymoon) < 15 && Math.abs(offsetx - offsetxmoon) < 15 && (offsetxmoon > 30) && (offsetxmoon < 45)) {
        document.body.style.backgroundColor = '#8b8b76';
        document.body.style.transitionDuration = "3.3s";

        
    } else if (Math.abs(offsety - offsetymoon) < 12 && Math.abs(offsetx - offsetxmoon) < 12 && (offsetxmoon > 45) && (offsetxmoon < 55)) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.transitionDuration = "3.3s";

    } else {
    }
    /*Updating positions*/
    sun.style.top= offsety + 'vh';
    sun.style.left = offsetx + 'vw';
    moon.style.top = offsetymoon + 'vh';
    moon.style.left = offsetxmoon + 'vw';

    window.requestAnimationFrame(runDay);


}
runDay();