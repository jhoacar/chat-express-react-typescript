import { writeFileSync } from 'fs';
import { join } from 'path';
import { generate } from 'selfsigned';

console.log('Generating selfsigned SSL certificate');

const attributes = [
  {
    name: 'commonName',
    value: 'chatwebrtc.com',
  },
];

const options = {
  days: 365,
  algorithm: 'sha256',
};

const pems = generate(attributes, options);

writeFileSync(join(__dirname, 'cert.pem'), pems.cert);

writeFileSync(join(__dirname, 'key.pem'), pems.private);
