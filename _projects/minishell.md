---
layout: project
title: "Minishell"
description: "A minimalist UNIX shell implementation with pipes, redirections, and built-in commands"
github_url: "https://github.com/ValGSgit/Minishell"
language: "C"
language_color: "#555555"
tech_stack:
  - C
  - Bash
  - GNU Readline
  - Unix Systems
key_features:
  - Interactive command prompt
  - Command history with up/down arrows
  - Signal handling (Ctrl-C/D/\)
  - Pipe support between commands
  - Input/output redirections
  - Environment variable expansion
  - Built-in commands (echo, cd, pwd, export, unset, env, exit)
file_structure: |
  Minishell/
  ├── src/
  │   ├── main.c              # Entry point
  │   ├── parser/             # Command parsing
  │   ├── executor/           # Command execution
  │   ├── builtins/           # Built-in commands
  │   └── signals/            # Signal handlers
  ├── includes/
  │   └── minishell.h         # Header files
  ├── libft/                  # Custom library
  └── Makefile                # Build configuration
---

# Minishell 🐚

![Minishell Demo](https://github.com/user-attachments/assets/65f08b37-bac4-4c32-ad48-92cf90ec5cae)

A minimalist UNIX shell implementation with basic features, created as part of the 42 School curriculum. Supports command execution, pipes, redirections, and built-in commands while handling signals and environment variables.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/ValGSgit/minishell)
[![Norminette](https://img.shields.io/badge/code%20style-norminette-blue)](https://github.com/42School/norminette)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 🌟 Features

### Core Functionality
- 🖥️ Interactive prompt with colored output
- 📖 Command history persistence (up/down arrows support)
- 🚦 Signal handling (Ctrl-C/Ctrl-D/Ctrl-\\)
- 🔄 PATH resolution for executables
- 📂 Built-in commands: `echo`, `cd`, `pwd`, `export`, `unset`, `env`, `exit`

### Advanced Features
- 🔄 Pipes (`|`) between multiple commands
- 📤📥 Redirections:
  - Input (`<`)
  - Output (`>`, `>>`)
  - Heredoc (`<<`)
- 💲 Environment variables expansion
- 🛡️ Quote handling:
  - Single quotes (disable all expansions)
  - Double quotes (allow $ expansion)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ValGSgit/minishell.git
cd minishell

# Build the project
make

# Run the shell
./minishell
```

## 🚀 Usage

### Basic Commands

```bash
Minishell-> echo "Hello $USER!" | cat -e
Hello codam!
Minishell-> ls -l > file.txt
Minishell-> < input.txt grep error | wc -l
```

### Redirections

```bash
Minishell-> cat << EOF > output.txt
> First line
> Second line
> EOF
Minishell-> sort < input.txt >> sorted.txt
```

### Environment Management

```bash
Minishell-> export TEST=value
Minishell-> env | grep TEST
TEST=value
Minishell-> unset TEST
```

## ⚙️ Built-in Commands

| Command | Supported Options | Description |
|---------|-------------------|-------------|
| `echo` | `-n` | Print arguments with optional newline |
| `cd` | `-` | Change directory |
| `pwd` | - | Print working directory |
| `export` | - | Set environment variables |
| `unset` | - | Remove environment variables |
| `env` | - | List environment variables |
| `exit` | - | Exit the shell |

## 🚨 Signal Handling

| Signal | Behavior |
|--------|----------|
| Ctrl-C | New prompt on fresh line |
| Ctrl-D | Clean shell exit |
| Ctrl-\\ | No operation |

## 🧪 Testing

Test with standard shell features:

```bash
# Pipeline test
Minishell-> ls | grep .c | wc -l

# Redirection test
Minishell-> cat < Makefile > copy.txt

# Environment test
Minishell-> export TEST=42 && echo $TEST
```

## ⚠️ Limitations

- No `&&`/`||` logical operators
- No wildcard expansion (`*`)
- No tilde expansion (`~`)
- Limited error messages compared to bash

## 🎓 Learning Outcomes

This project taught me:

- **Process Management**: Creating and managing child processes with fork()
- **File Descriptors**: Understanding and manipulating file descriptors for I/O redirection
- **Signal Handling**: Implementing proper signal handlers for interactive shells
- **Parsing**: Building a robust command parser for complex shell syntax
- **Memory Management**: Careful allocation and freeing of dynamic memory
- **Error Handling**: Comprehensive error checking and user-friendly error messages

## 📚 Acknowledgments

- 42 School curriculum for project specification
- GNU Readline library for line editing
- Bash behavior as reference implementation

---

*Developed as part of 42 School Common Core curriculum*
