---
title: Fish shell
category: CLI
layout: 2017/sheet
prism_languages: [fish]
updated: 2018-01-31
weight: -1
---

### Keys

| Shortcut            | Description                 |
| ---                 | ---                         |
| `^A ←` _/_ `^E →`   | Move to line beginning/end  |
| `Alt ←` _/_ `Alt →` | Move word                   |
| `^U`                | Delete to beginning         |
| `^W`                | Delete to previous `/`      |
| `^D`                | Delete next character       |
| `Alt D`             | Delete next word            |
| `^C`                | Cancel line                 |
| `Alt P`             | Page output                 |
| ---                 | ---                         |
| `Alt ↑` _/_ `Alt ↓` | Previous _/_ next arguments |
| `Alt E` _/_ `Alt V` | Open in external editor     |
| `^L`                | Repaint screen              |
{: .-shortcuts}

### Help

| `Alt H` | Help on word (man)                     |
| `Alt W` | Help on word (short descriptions)      |
| `Alt L` | List directory on cursor               |
{: .-shortcuts}

## Variables

### Defining and erasing

```fish
set my_variable value
```

```fish
set --erase my_variable
```

### Incrementing and decrementing

```fish
set my_variable (math $my_variable + 1)
set my_variable (math $my_variable - 1)
```

### Slicing

```fish
set my_variable $another_variable[1..10]
set my_variable $another_variable[2..]
set my_variable $another_variable[..-2]
```

## Arithmetic

```fish
math 1 + 2
```

| Operator            | Performs                    |
| ---                 | ---                         |
| `+`                 | Addition                    |
| `-`                 | Subtraction                 |
| `*`                 | Multiplication              |
| `/`                 | Division                    |
| `%`                 | Modulo                      |
| `^`                 | Exponentiation              |
{: .-shortcuts}

## String manipulation

```fish
string match --regex --entire 'Fish' 'This is a Fish shell!'
```

```fish
string replace --regex 'Fish' 'fish' 'This is a Fish shell!'
```

| Pattern             | Matches                     |
| ---                 | ---                         |
| `x?`                | Zero or one `x` chars       |
| `x*`                | Any count `x` chars         |
| `x+`                | One or more  `x` chars      |
| `x{n}`              | n times `x` chars           |
| `x{n,m}`            | n to m times `x` chars      |
| `x{n,}`             | n or more times `x` chars   |
| `x{n,}`             | n or more times `x` chars   |
| `[xy] `             | `x` or y char               |
| `[^xy]`             | not `x` or y char           |
{: .-shortcuts}

| Class               | Description                 |
| ---                 | ---                         |
| `\w`                | Word character              |
| `\d`                | Digit character             |
| `\W`                | Not word character          |
| `\D`                | Not digit character         |
{: .-shortcuts}

### Conditionals

```fish
if test $my_variable -lt $another_variable
  ···
else if test $my_variable -eq $another_variable
  ···
else
  ···
end
```

| Operator            | Meaning                                   |
| ---                 | ---                                       |
| `-lt`               | [L]ess [t]han                             |
| `-eq`               | [Eq]ual                                   |
| `-gt`               | [G]reater [t]han                          |
| `-le`               | [L]ess than or [e]qual to                 |
| `-ge`               | [G]reater than or [e]qual to              |
| `-f`                | [F]ile exists                             |
| `-d`                | [D]irectory exists                        |
| `-r`                | File or directory exists and [r]eadable   |
| `-w`                | File or directory exists and [w]ritable   |
| `-x`                | File or directory exists and e[x]ecutable |
{: .-shortcuts}

## Loops

```fish
for i in (seq 1 10)
  ...
end
```

## Functions

### Defining and erasing

```fish
function my_function --description "My description"
  ···
end
```

```fish
functions --erase my_function
```

### Events

#### Emitting

```fish
emit my_event
```

#### Listening

```fish
function myhook --on-event my_event
  ···
end
```

This lets you hook onto events, such as `fish_prompt`.

## Completions

### Creating completions

#### ~/.fish/completions/mycommand.fish

```fish
complete -c mycommand ...
complete -c mycommand ...
complete -c mycommand ...
```

### Options

```fish
complete \
  -c                         # command
  -s                         # short option
  -l                         # long option
  -r, --require-parameter
  -f, --no-files
  -x                         # exclusive (-r -f)
  -n '__fish_use_subcommand' # condition
  --description ".."
```

#### Example

```fish
  complete -c $cmd \
-n '__fish_use_subcommand' \
-x -a hello \
--description 'lol'
```

### Conditions

| Condition | Description
| --- | ---
| `-n __fish_complete_directories STRING DESCRIPTION` | performs path completion on STRING, allowing only directories, and giving them the description DESCRIPTION.
| `-n __fish_complete_path STRING DESCRIPTION` | performs path completion on STRING, giving them the description DESCRIPTION.
| `-n __fish_complete_groups` | prints a list of all user groups with the groups members as description.
| `-n __fish_complete_pids` | prints a list of all processes IDs with the command name as description.
| `-n __fish_complete_suffix SUFFIX` | performs file completion allowing only files ending in SUFFIX. The mimetype database is used to find a suitable description.
| `-n __fish_complete_users` | prints a list of all users with their full name as description.
| `-n __fish_print_filesystems` | prints a list of all known file systems. Currently, this is a static list, and not dependent on what file systems the host operating system actually understands.
| `-n __fish_print_hostnames` | prints a list of all known hostnames. This functions searches the fstab for nfs servers, ssh for known hosts and checks the /etc/hosts file.
| `-n __fish_print_interfaces` | prints a list of all known network interfaces.
| `-n __fish_print_packages` | prints a list of all installed packages. This function currently handles Debian, rpm and Gentoo packages.
| `-n __fish_use_subcommand` |
| `-n __fish_seen_subcommand_from init` |

#### Example

```fish
complete -c ruby -s X -x -a '(__fish_complete_directories (commandline -ct))' --description 'Directory'
```

### Examples

Start each example with `complete -c cmdname`

```fish
-x
  # no filename completion
```

```fish
-s d -x -a "read skip"
  # -d {read|skip}
```

```fish
-s d -x
  # -d <something>
```

```fish
-s f -r
  # -f FILE
```

```fish
-s f -l force
  # -f, --force
```

```fish
-a "(cat /etc/passwd | cut -d : -f 1)"
  # first argument as filename
```
