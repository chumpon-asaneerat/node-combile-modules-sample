const path = require('path');
const gulp = require('gulp');

const GulpJSDoc = require("./build/gulp/jsdoc").GulpJSDoc;
const GulpClean = require("./build/gulp/clean").GulpClean;

gulp.task('build-doc', (cb) => {
    let task = new GulpJSDoc();
    task.opts = {
        config: require('./jsdoc.json'),
        src: [
            path.join(__dirname, 'src/**/*.js')
        ],
        dest: path.join(__dirname, 'dist/client/js/doc/')
    };
    return task.task(cb);
});

gulp.task('clear-doc', () => {
    let task = new GulpClean();
    task.opts = {
        src: path.join(__dirname, 'dist/client/js/doc/**/*')
    };
    return task.task();
});