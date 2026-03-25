# Bash Command Reference

>A quick reference for useful Bash commands with descriptions. Viewable in any web browser.

---

## 1. Show Command History

```bash
history
```

**Description:** Lists all commands you have run in the current terminal session.

---

## 2. Find the Path of an Executable (which)

```bash
which <command>
```

**Description:** Shows the full path of the executable that would have been executed for the given command name.

---

## 3. Locate a Command (where)

```bash
where <command>
```

**Description:** Lists all locations of the command in your PATH (works on some systems, e.g., macOS with zsh).

---

## 4. Print Working Directory

```bash
pwd
```

**Description:** Prints the current working directory.

---

## 5. List Files and Directories

```bash
ls -al
```

**Description:** Lists all files and directories in the current directory with detailed information, including hidden files.

---

## 6. Change Directory

```bash
cd <directory>
```

**Description:** Changes the current working directory to the specified directory.

---

## 7. Search for Text in Files

```bash
grep 'pattern' filename
```

**Description:** Searches for the specified pattern in the given file.

**Example:**

```bash
grep 'TODO' main.py
```

This will print all lines in `main.py` that contain the word `TODO`.

---

## 8. Show Manual for a Command

```bash
man <command>
```

**Description:** Displays the manual page for the specified command.

---

echo $SHELL
cat .zsh_history

## 9. Show Terminal Program

```bash
echo $TERM_PROGRAM
```

**Description:** Prints the name of the terminal program you are currently using (e.g., Apple_Terminal, vscode).

---

## 10. Show Current Shell

```bash
echo $SHELL
```

**Description:** Prints the path to the shell currently in use (e.g., /bin/zsh, /bin/bash).

---

## 11. View Zsh Command History

```bash
cat .zsh_history
```

**Description:** Displays the contents of your Zsh shell history file, showing previously run commands. Run this command in root eg: cd ~

---