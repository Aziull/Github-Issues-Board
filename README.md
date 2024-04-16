# Github Kanban Board

## Features
1. The user can enter the repository URL in the input on top of the page and press "Load". For example: https://github.com/facebook/react.
2. App loads issues for the repo using Github API.
3. App contains 3 columns:
ToDo (all new issues)
In Progress (opened issues with assignee)
Done (closed issues)
4. The user can drag and drop between the columns and change the order of issues.
5. Current issue position (column and order) stored between search and browser sessions. When the user loads issues for Repo1 -> Repo2 -> Repo1 he sees all changes he did for Repo1.
6. The user can visit the profile of the owner of the repo and visit the repo as well by links under the input.

## Technologies

You should use exactly the listed technologies or one of them if it is allowed:

- React 18 with hooks, no classes
- Typescript
- UI library:
  - Ant Design
- State manager:
  - Redux-Toolkit
