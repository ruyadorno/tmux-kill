const getStdin = require('get-stdin');

function printId(stdin) {
  return process.stdout.write(stdin.split(':')[0]);
}

getStdin().then(printId);
