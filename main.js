document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('thebutton');
    button.addEventListener('click', renderWords)
});

function renderWords() {
    console.log('rendering')
    const input = document.getElementById('thewords')
    const words = input.value
    console.log(words)

    const canvas = drawText(words)
    const imgData = saveToImage(canvas);
    const pdfDataURI = saveToPDF(imgData);

    var iframe = document.createElement('iframe')
    iframe.width = '100%'
    iframe.height = '100%'
    iframe.src = pdfDataURI
    document.body.append(iframe)
}

function drawText(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx.font = '48px serif';
    ctx.fillText(text, 10, 50);

    return canvas;
}

function saveToImage(canvas) {
    return canvas.toDataURL('image/png');
}

function saveToPDF(imgData) {
    const doc = new jsPDF();
    doc.addImage(imgData, 'PNG', 0, 0, 300,100 );
    return doc.output('datauri');
}
