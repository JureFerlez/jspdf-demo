document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('thebutton');
    button.addEventListener('click', renderWords);
});

function renderWords() {
    console.log('rendering');
    const input = document.getElementById('thewords');
    const words = input.value;
    console.log(words);

    const canvas = drawText(words);
    const imgData = saveToImage(canvas);
    const pdfDataURI = saveToPDF(imgData);
    var iframe = document.createElement('iframe');

    iframe.width = '300px';
    iframe.height = '500px';
    iframe.src = pdfDataURI;
    document.body.append(iframe);
    console.log('done');
}

function drawText(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 100;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#000000";
    ctx.font = '48px serif';
    ctx.fillText(text, 10, 50);

    return canvas;
}

function saveToImage(canvas) {
    return canvas.toDataURL('image/png');
}

function saveToPDF(imgData) {
    const doc = new jsPDF();

    doc.addImage(imgData, 'PNG', 0, 100, 300,100 );

    return doc.output('datauristring');
}
