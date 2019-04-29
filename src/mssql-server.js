/**
 * The MS Sql Server Access class.
 */
class MSSqlServer {
    /**
     * Create new instance of MSSqlServer class.
     * @returns Returns new instance of MSSqlDb class.
     */
    constructor() {
        console.log('MSSqlServer::ctor() => ', nlib);
    };
};

/**
 * The MS Sql Server's database access class.
 */
class MSSqlDb {
    /**
     * Create new instance of MSSqlDb class.
     * @returns Returns new instance of MSSqlDb class.
     */
    constructor() {
        console.log('MSSqlDb::ctor() => ', nlib);
    };
};

module.exports = exports = { MSSqlServer, MSSqlDb };