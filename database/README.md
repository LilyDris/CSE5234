## How to Install sqlite on Windows

1. Follow this link: https://www.guru99.com/download-install-sqlite.html
2. *Optional* : for accessing sqlite in a single command from git bash add this line to ~/.bashrc
    > alias sqlite='/c/Program\ Files/sqlite/sqlite3.exe'


## How to install Sequlize for node.js

1. npm install from root directory
    > ```user@pc MINGW64 /e/CSE5234 (master) $``` npm install 
2. Install individually 
    > npm install sequelize sqlite3

## Tutorials
1. SQLite: https://www.tutorialspoint.com/sqlite/index.htm
2. SQLite: https://www.sqlitetutorial.net/
3. Sequelize: https://sequelize.org/


## How to Check if your SQLite installation works

1. open the production.db in commandline using sqlite and try out different commands

## How to Use database in Backend? 

1. the database_service.js will provide us with DB APIs we need and the backend will use them to respond to requests made by the frontend