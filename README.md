oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ph2
$ ph2 COMMAND
running command...
$ ph2 (--version)
ph2/0.0.0 linux-x64 node-v14.18.2
$ ph2 --help [COMMAND]
USAGE
  $ ph2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ph2 hello PERSON`](#ph2-hello-person)
* [`ph2 hello world`](#ph2-hello-world)
* [`ph2 help [COMMAND]`](#ph2-help-command)
* [`ph2 plugins`](#ph2-plugins)
* [`ph2 plugins:install PLUGIN...`](#ph2-pluginsinstall-plugin)
* [`ph2 plugins:inspect PLUGIN...`](#ph2-pluginsinspect-plugin)
* [`ph2 plugins:install PLUGIN...`](#ph2-pluginsinstall-plugin-1)
* [`ph2 plugins:link PLUGIN`](#ph2-pluginslink-plugin)
* [`ph2 plugins:uninstall PLUGIN...`](#ph2-pluginsuninstall-plugin)
* [`ph2 plugins:uninstall PLUGIN...`](#ph2-pluginsuninstall-plugin-1)
* [`ph2 plugins:uninstall PLUGIN...`](#ph2-pluginsuninstall-plugin-2)
* [`ph2 plugins update`](#ph2-plugins-update)

## `ph2 hello PERSON`

Say hello

```
USAGE
  $ ph2 hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/starsinmypockets/ph2/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ph2 hello world`

Say hello world

```
USAGE
  $ ph2 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ph2 help [COMMAND]`

Display help for ph2.

```
USAGE
  $ ph2 help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ph2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `ph2 plugins`

List installed plugins.

```
USAGE
  $ ph2 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ph2 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `ph2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ph2 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ph2 plugins add

EXAMPLES
  $ ph2 plugins:install myplugin 

  $ ph2 plugins:install https://github.com/someuser/someplugin

  $ ph2 plugins:install someuser/someplugin
```

## `ph2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ph2 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ph2 plugins:inspect myplugin
```

## `ph2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ph2 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ph2 plugins add

EXAMPLES
  $ ph2 plugins:install myplugin 

  $ ph2 plugins:install https://github.com/someuser/someplugin

  $ ph2 plugins:install someuser/someplugin
```

## `ph2 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ph2 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ph2 plugins:link myplugin
```

## `ph2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ph2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ph2 plugins unlink
  $ ph2 plugins remove
```

## `ph2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ph2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ph2 plugins unlink
  $ ph2 plugins remove
```

## `ph2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ph2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ph2 plugins unlink
  $ ph2 plugins remove
```

## `ph2 plugins update`

Update installed plugins.

```
USAGE
  $ ph2 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
