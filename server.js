const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const app = express();
const { exec } = require('child_process');
// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
const secret = "YOUR_SECRET_KEY"
// POST handler for /deploy endpoint
app.post('/deploy', (req, res) => {
  const payload = JSON.stringify(req.body);
  const signature = req.headers['x-hub-signature'];
  const hmac = crypto.createHmac('sha1', secret);
  const digest = Buffer.from('sha1=' + hmac.update(payload).digest('hex'), 'utf8');
  const checksum = Buffer.from(signature, 'utf8');
  if (checksum.length !== digest.length || !crypto.timingSafeEqual(digest, checksum)) {
    console.error('Invalid signature');
    return res.status(403).send('Invalid signature');
  }
  console.log('[+] Working...');
  exec('deploy.bat', (error, stdout, stderr) => {
    if (error) {
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
  res.status(200).send('OK');
});

// Start the server
app.listen(3000, () => {
  console.log('Listening...');
});
