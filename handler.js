import React, { useState, useEffect } from 'react';
import axios from 'axios';
import speakeasy from 'speakeasy';

function App() {
    const [secret, setSecret] = useState('');
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [dataUrl, setDataUrl] = useState('');

    useEffect(() => {
        // Fetch a secret key for the user
        axios.get('/api/generateSecret')
            .then((response) => {
                setSecret(response.data.secret);
            })
            .catch((error) => {
                console.error('Error fetching secret:', error);
            });
    }, []);

    const generateQRCode = () => {
        // Generate QR code for the user to scan
        axios.get(`/api/generateQRCode/${secret}/${username}`)
            .then((response) => {
                setDataUrl(response.data.data_url);
            })
            .catch((error) => {
                console.error('Error generating QR code:', error);
            });
    };

    const verifyToken = () => {
        // Verify the TOTP token
        const verified = speakeasy.totp.verify({
            secret,
            encoding: 'base32',
            token,
        });

        console.log('Token verification:', verified);
    };

    return (
        <div>
            <h1>Google Authenticator Example</h1>
            <p>Secret Key: {secret}</p>
            <p>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></p>
            <button onClick={generateQRCode}>Generate QR Code</button>
            {dataUrl && <img src={dataUrl} alt="QR Code" />}
            <p>Token: <input type="text" value={token} onChange={(e) => setToken(e.target.value)} /></p>
            <button onClick={verifyToken}>Verify Token</button>
        </div>
    );
}

export default App;
