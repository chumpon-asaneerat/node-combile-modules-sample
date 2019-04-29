const path = require('path');
const fs = require('fs');

class nlib {
    static getFiles(dir) {
        let findFiles = f => nlib.getFiles(path.join(dir, f));
        return fs.statSync(dir).isDirectory() ? 
            Array.prototype.concat(...fs.readdirSync(dir)).map(findFiles) : dir;
    };
    static getFilesByExtension(dir, ...extensions) {
        let files = nlib.getFiles(dir);
        if (!files) return null;
        let filter = f => (extensions.indexOf(path.extname(f)) !== -1);
        return Array.prototype.concat(...files).filter(filter);
    };
};

console.log('nlib load modules....');

(() => {
    let modulePath = path.join(__dirname, 'nlib-modules');    
    let files = nlib.getFilesByExtension(modulePath, '.js');
    if (!files) return;
    files.forEach(file => Object.assign(nlib, require(file)));
})();

console.log('nlib load modules completed.');

module.exports = exports = nlib;

console.log('nlib export modules completed.');
