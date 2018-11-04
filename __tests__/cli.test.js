const { execSync } = require('child_process');
const { join } = require('path');

const cmd = `node ${join(__dirname, '../cli.js')}`;
const env = {
  ...process.env,
  PATH: join(__dirname, '../__mocks__') + ':' + process.env.PATH
};

const exec = () => execSync(cmd, { env });

it('should return selected item session id', () => {
  expect(exec().toString()).toBe('kill session 9\n');
});
