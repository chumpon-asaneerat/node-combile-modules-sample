const nlib = require('./nlib-core');

class ExpressServer {
    constructor() {
        console.log('ExpressServer::ctor() => ', nlib);
    }
};

class ExpressRouter {
    constructor() {
        console.log('ExpressRouter::ctor() => ', nlib);
    }
};

module.exports = exports = { ExpressServer, ExpressRouter };