const speakeasy = require('speakeasy');
const QRCode = require('qrcode');


// In-memory database for simplicity (in production, use a proper database)
const users = {};

// Generate a secret for a user
const setup = async (req, res) => {
    
    const { userName } = req.body;

    console.log("userName==>>", userName)
    // Generate a secret for the user
    const secret = speakeasy.generateSecret({ length: 20, issuer: "Jiweman", name: "Jiweman" });

    console.log("secret==>>", secret)

    // Generate a QR code URL for the user to scan with Google Authenticator
    const qrCodeUrl = secret.otpauth_url;
    // let qrCodeUrl = speakeasy.otpauthURL({
    //     secret: secret,
    //     label: userName,
    //     algorithm: 'sha1',
    // })

    QRCode.toDataURL(qrCodeUrl, (err, dataURL) => {
        if (err) {
            console.error(err);
        } else {
            return res.json({ dataURL });

            // return (dataURL);
        }
    });

    // Send the QR code URL to the client
};

// Verify the user's code during login
const verify = (req, res) => {
    const { secret, code } = req.body;

    const verified = speakeasy.totp.verify({
        secret,
        encoding: 'base32',
        token: code,
    });
    res.json({ verified });

};

module.exports = { setup, verify }