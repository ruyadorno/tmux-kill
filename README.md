# tmux-kill

[![NPM version](https://badge.fury.io/js/tmux-kill.svg)](https://npmjs.org/package/tmux-kill)
[![Build Status](https://travis-ci.org/ruyadorno/tmux-kill.svg?branch=master)](https://travis-ci.org/ruyadorno/tmux-kill)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/ruyadorno/tmux-kill/master/LICENSE)
[![Join the chat at https://gitter.im/ipipeto/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ipipeto/Lobby)

Interactively kill a tmux session

> An [iPipeTo](https://github.com/ruyadorno/ipt) workflow

<br />
<br />

<p align="center">
<a href="https://asciinema.org/a/210193">
<img alt="demo animation" width="600" src="https://cdn.rawgit.com/ruyadorno/tmux-kill/master/demo.svg" />
</a>
</p>

<br />

## Install

Get it with **npm**:

```sh
npm install -g tmux-kill
```

### Run

```
tmux-kill
```

**OR**

bypass **npm install** and run it at once using **npx**:

```sh
npx tmux-kill
```

## Bash alias equivalent

If you're already an **ipt** user that has it globally installed, you can get this same functionality by just adding this alias to your **bash** (or equivalent) file:

```sh
alias tmux-kill="tmux kill-session -t $(tmux list-session | ipt -u | cut -d ':' -f 1 )"
```

### Requirements

- [tmux](https://github.com/tmux/tmux) globally installed
- [ipt](https://www.npmjs.com/package/ipt) globally installed

## License

[MIT](LICENSE) © 2018 [Ruy Adorno](http://ruyadorno.com)

