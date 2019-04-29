const nlib = require('./nlib-core');

class MSSqlServer {
    constructor() {
        console.log('MSSqlServer::ctor() => ', nlib);
    }
};

class MSSqlDb {
    constructor() {
        console.log('MSSqlDb::ctor() => ', nlib);
    }
};

module.exports = exports = { MSSqlServer, MSSqlDb };