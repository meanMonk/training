// console.log('window',window);
// console.log('global',global);
// setTimeout()
// clearTimeout()

// setInterval()
// clearInterval()

// module = provides information about the currently executing file
// console.log(module);

// filename
// console.log('filename',__filename)
// directory name
// console.log('dirname',__dirname)

/**
 * Module.
 *  - Module creation in node
 *  - Module export
 *  - Module import with require
 *
*/
/* const { printCar, printMessage, paintMe } = require('./greetModule')

printCar('lexus')
printMessage('Something is there!')
paintMe('Blue')
 */

/** @process
 * - process in node is something which gives information about the node running process.
 * - mostly use to get the env.
*/
// console.log(process.env);
/** Events in nodes */
/*
const EventEmitter = require('events');
const EventModule = require('./eventModule')
const event = new EventEmitter();

const emInstance = new EventModule(event);

emInstance.log()

event.emit('sys-down') /// he is

console.log('event.eventNames()',event.eventNames())
 */

/**
 * @http
 *
 *  */