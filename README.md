 Git Branch Practice Guide — To-Do App
Files in this project
todo-app/
├── index.html   ← HTML structure
├── style.css    ← All styles
├── app.js       ← All JavaScript logic
└── GIT_GUIDE.md ← This file

 Step 1 — Set Up the Repo
Open the todo-app folder in VS Code, then open the Terminal:
bashgit init
git add .
git commit -m "Initial commit - base project setup"

 Step 2 — Practice Each Branch
Branch 1: Add Task Feature
bashgit checkout -b feature/add-task
# Make a small change in app.js (e.g. change the alert message)
git add .
git commit -m "feat: add task input and display"
git checkout main
git merge feature/add-task
Branch 2: Delete Task Feature
bashgit checkout -b feature/delete-task
# Add a console.log inside deleteTask() function
git add .
git commit -m "feat: add delete task button"
git checkout main
git merge feature/delete-task
Branch 3: Mark Complete Feature
bashgit checkout -b feature/mark-complete
# Change the completed style color in style.css
git add .
git commit -m "feat: toggle task completion"
git checkout main
git merge feature/mark-complete
Branch 4: Local Storage Feature
bashgit checkout -b feature/local-storage
# Tweak the localStorage key name in app.js
git add .
git commit -m "feat: persist tasks with localStorage"
git checkout main
git merge feature/local-storage

 Step 3 — Create a Merge Conflict (on purpose!)
This teaches you how to resolve conflicts:
bash# On main, change the h1 text in index.html
git add . && git commit -m "change: update app title on main"

# Create a new branch and change the SAME h1 text differently
git checkout -b feature/new-title
# Edit index.html h1 to something different
git add . && git commit -m "change: update title on branch"

# Now merge — this will CONFLICT!
git checkout main
git merge feature/new-title
# VS Code will show the conflict — fix it, then:
git add index.html
git commit -m "fix: resolve merge conflict in title"

 Useful Commands to Know
CommandWhat it doesgit branchList all branchesgit branch -d branchnameDelete a branchgit log --onelineSee commit historygit statusSee changed filesgit diffSee exact line changes

 What You'll Have Practiced

 Creating branches
 Switching between branches
 Committing on a branch
 Merging a branch into main
 Resolving a merge conflict
 Deleting old branches
