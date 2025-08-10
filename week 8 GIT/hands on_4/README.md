# Git Conflict Resolution Lab

## Objectives
Implement conflict resolution when multiple users update the trunk (master) in a way that conflicts with a branch.

## Steps
1. Verify if master is in clean state:
   ```bash
   git status
   ```
2. Create branch "GitWork" and add `hello.xml`.
3. Update `hello.xml` content and check status.
4. Commit changes in branch.
5. Switch to master.
6. Add a file `hello.xml` to master with different content.
7. Commit changes in master.
8. View log:
   ```bash
   git log --oneline --graph --decorate --all
   ```
9. Compare differences:
   ```bash
   git diff master GitWork
   ```
10. Optionally use P4Merge for visualization.
11. Merge branch into master:
   ```bash
   git merge GitWork
   ```
12. Observe conflict markers in `hello.xml`.
13. Use 3-way merge tool or manual editing to resolve.
14. Commit resolved changes to master.
15. Add backup files to `.gitignore` and commit.
16. List all branches:
   ```bash
   git branch
   ```
17. Delete merged branch:
   ```bash
   git branch -d GitWork
   ```
18. View final log:
   ```bash
   git log --oneline --graph --decorate
   ```
