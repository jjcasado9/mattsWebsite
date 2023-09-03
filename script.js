

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
