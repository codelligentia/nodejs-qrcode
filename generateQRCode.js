const QRCode = require('qrcode');
const fs = require('fs');


const generateQRCodeToFile = async (text, filePath) => {
    try {
        await QRCode.toFile(filePath, text);
        console.log(`generateQRCodeToFile ${filePath}`);
    } catch (err) {
        console.error(err);
    }
}


generateQRCodeToFile('https://google.com', './qrcode/qrcode.png');
