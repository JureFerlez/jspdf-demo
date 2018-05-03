document.addEventListener('DOMContentLoaded', function () {
    draw(); 
});

function draw() {
    const canvas = document.getElementById('canvas');
    console.log(canvas);
    var ctx = canvas.getContext('2d');
    ctx.font = '48px serif';
    ctx.fillText('Hello world', 10, 50);
    console.log('done drawing');
}
