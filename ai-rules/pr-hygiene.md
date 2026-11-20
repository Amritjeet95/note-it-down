# AI PR Hygiene (personal, reusable across projects)

Project-level rules (CLAUDE.md, AGENTS.md, CONTRIBUTING) override anything here.

## Branch and PR naming
- Pick the branch prefix from the ticket type: Bug -> `bugfix/`, Story/Task -> `feature/`, chore -> `chore/`.
  Name it `<prefix><TICKET>-<short-kebab-desc>` BEFORE the first push.
- Never rename a branch after a PR exists: renaming the remote branch closes the PR.
- PR title follows the project's commit format (default `<type>(<TICKET>): <subject>`).
  The type must match the prefix (`bugfix/` -> `fix`, `feature/` -> `feat`).
- If the prefix or title format is unclear, ask before creating the branch/PR.

## Tests
- Add tests only for behaviour the diff adds or changes.
- When removing a behaviour, delete its old tests. Do not add "no longer does X" tests.
- No negative tests asserting a removed gate/condition is absent.
- One test per behaviour.
- Before committing, list each new test and the changed line it covers. Delete any that map to nothing.

## Scope
- Smallest change that satisfies the ticket.
- Don't touch unrelated lint warnings, formatting or code.

## Before opening a PR
- Read the full ticket (description, comments, links); state the intended change in one sentence.
- When the ticket is ambiguous, show branch name, PR title and test list for approval first.
