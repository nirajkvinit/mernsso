const express = require("express");
const http = require("http");
const path = require("path");
const vhost = require("vhost");
let portNum = process.env["PORT"] || 8080;

const app = express();
const peer = express();
const peer2 = express();
const orderer = express();
const certauth = express();

peer.use(express.static(path.join(__dirname, "peer", "build")));
peer2.use(express.static(path.join(__dirname, "peer2", "build")));
orderer.use(express.static(path.join(__dirname, "orderer", "build")));
certauth.use(express.static(path.join(__dirname, "certauth", "build")));

peer.use((req, res, next) => {
  return res.sendFile(path.resolve(__dirname, "peer", "build", "index.html"));
});

peer2.use((req, res, next) => {
  return res.sendFile(path.resolve(__dirname, "peer2", "build", "index.html"));
});

orderer.use((req, res, next) => {
  return res.sendFile(
    path.resolve(__dirname, "orderer", "build", "index.html")
  );
});

certauth.use((req, res, next) => {
  return res.sendFile(
    path.resolve(__dirname, "certauth", "build", "index.html")
  );
});

app.use(vhost("peer.nishant", peer));
app.use(vhost("peer2.nishant", peer2));
app.use(vhost("orderer.nishant", orderer));
app.use(vhost("certauth.nishant", certauth));

app.listen(portNum, () => {
  console.log(`ssotest is operating on port number ${portNum}`);
});

module.exports = {
  app
};
