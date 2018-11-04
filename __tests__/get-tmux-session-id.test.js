const { execSync } = require('child_process');
const { join } = require('path');

const cmd = `node ${join(__dirname, '../get-tmux-session-id.js')}`;
const exec = input => execSync(`echo "${input}" | ${cmd}`);

it('should return correct number id', () => {
  expect(exec('0: foo').toString()).toBe('0');
});

it('should return correct string id', () => {
  expect(exec('bar: foo lorem ipsum').toString()).toBe('bar');
});

it('should return correct id from a legit tmux response', () => {
  expect(
    exec('8: 1 windows (created Tue Oct 30 16:31:38 2018) [311x56]').toString()
  ).toBe('8');
});

it('should return correct string id in case of multiple colons', () => {
  expect(exec('bar: foo: lorem: ipsum').toString()).toBe('bar');
});
