
function calcVmin(){
    return Math.min(window.innerWidth, window.innerHeight);
} 
function generateKeyframes() {
    let keyframes = `@keyframes move {`;
// Number of steps in the animation
    const steps = 100;

    // Calculate step increments for translation
    const stepX = 50 / steps; // 100vw divided by steps
    const stepY = 20 / steps;  // 50vh divided by steps

    // Generate keyframes
    for (let i = 0; i <= steps; i++) {
        const keyframeSel = (i * 100) / steps;
        const x = -55* Math.cos((180 / steps) * i * (Math.PI / 180))+55;
        const y = -55*Math.sin((180 / steps) * i * (Math.PI / 180));
        const xoffset = -20*Math.cos((180 / steps) * i * (Math.PI / 180));
        keyframes += `
        ${keyframeSel}% {
            transform: translate(${x}vw, ${y}vh) ;
        }
    `;
       
    }
    keyframes += `}`;
    return keyframes;
}
// Create a style element to hold the keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(generateKeyframes(), styleSheet.cssRules.length);


function setBgColor(color){
    
}



function checkOverlap(){

    const sun = document.getElementById("sun");
    const rectSun = sun.getBoundingClientRect();
    const moon = document.getElementById("moon");
    const rectMoon = moon.getBoundingClientRect();
    let sunWidth = rectSun.width;
    let distance = Math.sqrt(Math.pow(rectSun.top-rectMoon.top,2)+Math.pow(rectSun.left-rectMoon.left,2));

    /*Solar Eclipse */
    if (distance < sunWidth && (rectSun.left/window.innerWidth*100 > 30) && rectSun.left>rectMoon.left && (rectSun.left/window.innerWidth*100 < 60)){
        document.body.style.transitionDuration ="2s";  
        document.body.style.backgroundColor = '#8b8b76';  
        $('body').css('background-color', '#8b8b76');  

    }else if(distance > sunWidth/2 && distance < sunWidth && rectSun.left<=rectMoon.left && (rectSun.left/window.innerWidth*100 > 30)){
        
        document.body.style.transitionDuration ="2s"; 
        document.body.style.backgroundColor = '#fff';
        $('.body').css('background-color', '#fff');
 
    }else{
    
      
    }
    window.requestAnimationFrame(checkOverlap)
}


 checkOverlap();
  