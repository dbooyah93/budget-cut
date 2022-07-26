BudgetCut
===
A budget-slashing app which allows people to take control of their finances.
---
This is the source code for BudgetCut, an application which is built to improve the way people manage their money.

> [Documentation](https://github.com/dbooyah93/budget-cut/wiki)

### License
TODO: Terms and conditions of this application are [here](./)
Summary:
* You may access this application through the host server.
* You may download the source code and build this application on your local machine.
* You may not redistribute this application or its source code.

### Install this locally
* [Install Node]
* Fork this repository with [Git] & rename it to your project's name.
* Clone the forked repository to your computer.
* Open a terminal in the root directory of the cloned repository.
* Run `npm i` in the terminal.

From here, you're ready to use the app.
You can use the app locally by running `npm run start:prod` in the terminal and navigating to [localhost:1111] in a web browser.

### Scripts
To run a script, type `npm run <script-name>`

| script-name | description |
|:----------- |:----------- |
| `build` | call build:dev |
| `build:dev` | try to compile the application into /bin/ |
| `build:prod` | try to compile an optimized version of the application into /bin/ |
| `start` | call start:dev |
| `start:dev` | build:dev & start a hot-reloading server at [localhost:1000] |
| `start:prod` | build:prod & start a server at [localhost:1111] |
| `test` | run all Jest unit tests and produce a coverage report |
| `test:watch` | test & rerun when files are updated |

To edit commands, see "scripts" in package.json

### To contribute to this application
Unfortunately, this application doesn't support user contributions right now.

[Install Node]: https://nodejs.org/en/download/-
[Git]: https://git-scm.com/downloads
[localhost:1000]: http://localhost:1000
[localhost:1111]: http://localhost:1111