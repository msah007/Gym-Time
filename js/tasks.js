//tasks.js
//for Start task runner

import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import watch from 'start-watch';
import clean from 'start-clean';
import babel from 'start-babel';
import write from 'start-write';
import eslint from 'start-eslint';
import mocha from 'start-mocha';
import * as coverage from 'start-coverage';
import codecov from 'start-codecov';
 
import istanbul from 'babel-istanbul';
 
const start = Start(reporter());
 
export function build() {
    return start(
        files('build/'),
        clean(),
        files('lib/**/*.js'),
        babel(),
        write('build/')
    );
}
 
export function dev() {
    return start(
        files('build/'),
        clean(),
        files('lib/**/*.js'),
        watch(file => start(
            files(file),
            babel(),
            write('build/')
        ))
    );
}
 
export function lint() {
    return start(
        files([ 'lib/**/*.js', 'test/**/*.js' ]),
        eslint()
    );
}
 
export function test() {
    return start(
        files('test/**/*.js'),
        mocha()
    );
}
 
export function tdd() {
    return start(
        files([ 'lib/**/*.js', 'test/**/*.js' ]),
        watch(test)
    );
}
 
export function cover() {
    return start(
        files('coverage/'),
        clean(),
        files('lib/**/*.js'),
        coverage.instrument(istanbul),
        test,
        coverage.report()
    );
}
 
export function travis() {
    return start(
        lint,
        cover,
        codecov()
    );
}