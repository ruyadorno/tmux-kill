#!/usr/bin/env node

const { join } = require('path');
const { execSync } = require('child_process');

const env = {
  ...process.env,
  PATH: process.env.PATH + ':' + join(__dirname, 'node_modules', '.bin')
};

const sessionIds = `node ${join(__dirname, 'get-tmux-session-id.js')}`;

process.stdout.write(
  execSync(
    `tmux kill-session -t $(tmux list-session | ipt -u | ${sessionIds})`,
    {
      env
    }
  ).toString()
);
