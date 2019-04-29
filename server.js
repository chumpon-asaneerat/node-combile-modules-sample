// main entry.
const { DateTime, TimeSpan, Directory } = require('./src/nlib');
const { ExpressRouter, ExpressServer } = require('./src/express-server');
const { MSSqlServer, MSSqlDb } = require('./src/mssql-server');

console.log('server.js running..');

//console.log(nlib);
console.log(new ExpressRouter());
console.log(new MSSqlServer());
console.log(new MSSqlDb());

let svr = new ExpressServer();
svr.setup({ port: 3000 });
svr.start();

console.log('server.js exit..');