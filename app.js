function matrix () {

    const canv = document.querySelector('canvas'),
    cgx = canv.getContext('2d'),
    width = (canv.width = window.innerWidth),
    height = (canv.height = window.innerHeight);

    const matrix = "✇✖✟✠❁❍❒".split("");

    let font = 20,
    col = width / font,
    arr = new Array(Math.round(col));
    
    for (let i = 0; i < col; i++) arr[i] = Math.random() * arr.length;
    
    function draw() {
        cgx.fillStyle = "rgba(0, 0, 0, 0.25)";
        cgx.fillRect(0, 0, width, height);
        cgx.font = font + "px system-ui";

        for(let i = 0; i < arr.length; i++) {
            cgx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            let txt = matrix[Math.floor(Math.random() * matrix.length)];
            cgx.fillText(txt, i * font, arr[i] * font);
            if (arr[i] * font > height && Math.random() > 0.95) arr[i] = 0;
            arr[i]++;
        }
    }

    setInterval(draw, 70);

}

matrix();

document.addEventListener('click', () => {
    document.body.requestFullscreen();
    document.body.removeChild(document.querySelector('canvas'));
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    window.matrix()
});
