# contact-list-app



# Prerequisites

Node.js and npm are essential to Angular development.

Get it now if it's not already installed on your machine.
Verify that you are running at least node v4.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

We recommend nvm for managing multiple versions of node and npm.

Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., my-proj).

git clone https://github.com/projectlink  my-proj
cd my-proj
We have no intention of updating the source on angular/quickstart. Discard the .git folder..

rm -rf .git  # OS/X (bash)
rd .git /S/Q # windows
Delete non-essential files (optional)

You can quickly delete the non-essential files that concern testing and QuickStart repository maintenance (including all git-related artifacts such as the .git folder and .gitignore!) by entering the following commands while in the project folder:

# OS/X (bash)

xargs rm -rf < non-essential-files.osx.txt
rm src/app/*.spec*.ts
rm non-essential-files.osx.txt
# Windows

for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q
Create a new git repo

You could start writing code now and throw it all away when you're done. If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a local git repo and make the first commit:

git init
git add .
git commit -m "Initial commit"
Recover the deleted .gitignore from the QuickStart repository if you lost it in the Delete non-essential files step.
Create a remote repository for this project on the service of your choice.

Grab its address (e.g. https://github.com/<my-org>/my-proj.git) and push the local repo to the remote.

git remote add origin <repo-address>
git push -u origin master
Install npm packages

See npm and nvm version notes above
Install the npm packages described in the package.json and verify that it works:

npm install
npm start
Doesn't work in Bash for Windows which does not support servers as of January, 2017.
The npm start command first compiles the application, then simultaneously re-compiles and runs the lite-server. Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.

# npm scripts

We've captured many of the most useful commands in npm scripts defined in the package.json:

npm start - runs the compiler and a server at the same time, both in "watch mode".
npm run build - runs the TypeScript compiler once.
npm run build:w - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
npm run serve - runs the lite-server, a light-weight, static file server, written and maintained by John Papa and Christopher Martin with excellent support for Angular apps that use routing.
Here are the test related scripts:

npm test - compiles, runs and watches the karma unit tests
npm run e2e - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)
