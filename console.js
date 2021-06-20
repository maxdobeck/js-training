const chalk = require('chalk');
const log = console.log;
var prompt = require('prompt');



console.log('Hello from the console');
console.error('Hello from the error output');
let n = 100_000;
console.log('%d', n);

log(chalk.bgRed('Hello') + chalk.red.bgBlack.italic(' World') + chalk.bgBlueBright('!'));


prompt.start();
prompt.get(['name'], function (err, result) {
    console.log('Your name is: %s', chalk.keyword('orange')(result.name));
});