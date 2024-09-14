const QRCode = require('qrcode');
const fs = require('fs');


const generateQRCodeToFile = async (text, filePath) => {
    try {
        await QRCode.toFile(filePath, text, {
            color: {
                dark: '#ff7c00',
                light: '#fff'
            },
            errorCorrectionLevel: 'H',
        }, function (err) {
            if (err) throw err;
            console.log('ok');
        });
        console.log(`generateQRCodeToFile ${filePath}`);
    } catch (err) {
        console.error(err);
    }
}


generateQRCodeToFile('https://google.com', './qrcode/custom-qrcode.png');
