// main entry.
const nlib = require('./src/nlib')
// parse type need to used from entry object.
const { ExpressServer, ExpressRouter, MSSqlServer, MSSqlDb } = nlib;

console.log('server.js running..');

//console.log(nlib);
console.log(new ExpressServer());
console.log(new ExpressRouter());
console.log(new MSSqlServer());
console.log(new MSSqlDb());

console.log('server.js exit..');