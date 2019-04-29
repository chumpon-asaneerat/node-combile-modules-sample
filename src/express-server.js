/**
 * The ExpressServer class.
 */
class ExpressServer {
    /**
     * Create new instance of ExpressServer.
     * @return {ExpressServer} Returns new instance of ExpressServer class
     */
    constructor() {
        console.log('ExpressServer::ctor() => ', nlib);
    }
    /**
     * Setup server options.
     * @param {{port: number, appName: string}} opts - The server options.
     */
    setup(opts) {
        console.log('setup server:', opts);
    };
    /**
     * Start server.
     */
    start() {
        console.log('start server');
    };
};

/**
 * The ExpressRouter class.
 */
class ExpressRouter {
    /**
     * Create new instance of ExpressRouter.
     * @return {ExpressRouter} Returns new instance of ExpressRouter class
     */
    constructor() {
        console.log('ExpressRouter::ctor() => ', nlib);
    };
};

module.exports = exports = { ExpressServer, ExpressRouter };