const QRCode = require('qrcode');
const fs = require('fs');

const generateQRCode = async (text) => {
    try {
        const qr = await QRCode.toDataURL(text);
        console.log(qr);
    } catch (err) {
        console.error(err)
    }
};

generateQRCode('https://google.com');


