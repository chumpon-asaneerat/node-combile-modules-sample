const path = require('path');
const fs = require('fs');

/**
 * The .NET like DateTime class.
 */
class DateTime {
};
/**
 * The .NET like TimeSpan class.
 */
class TimeSpan {
};
/**
 * The Directory utilities class.
 */
class Directory {
    /**
     * Gets list of file name in specificed directory and its sub directories.
     * @param {String} dir The path to gets list of file name.
     * @returns Array of file name in specificed directory.
     */
    static getFiles(dir) {
        let findFiles = f => Directory.getFiles(path.join(dir, f));
        return fs.statSync(dir).isDirectory() ? 
            Array.prototype.concat(...fs.readdirSync(dir)).map(findFiles) : dir;
    };
    /**
     * Gets list of file name in specificed directory and its sub directories.
     * @param {String} dir The path to gets list of file name.
     * @param  {...String} extensions The filter extensions. For Example '.js', '.mp4'
     * @returns Array of file name in specificed directory.
     */
    static getFilesByExtension(dir, ...extensions) {
        let files = Directory.getFiles(dir);
        if (!files) return null;
        let filter = f => (extensions.indexOf(path.extname(f)) !== -1);
        return Array.prototype.concat(...files).filter(filter);
    };
};

module.exports = exports = { DateTime, TimeSpan, Directory };