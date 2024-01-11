const express = require('express');
const app = express();
const Vigenere = require('caesar-salad').Vigenere;

const port = 8000;
const password = 'password';

app.get('/text/:word', (req, res) => {
  res.send(req.params.word);
});

app.get('/encode/:text', (req, res) => {
  res.send(Vigenere.Cipher(password).crypt(req.params.text));
});

app.get('/decode/:text', (req, res) => {
  res.send(Vigenere.Decipher(password).crypt(req.params.text));
});

app.listen(port, () => {
  console.log('Server online in ' + port);
});