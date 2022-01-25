## express-auto-git-pull
Writing an express API to call a bash script for conducting git pull when users access the endpoint 

## Installation
```bash
$ npm install
```

## Running the app
```bash
$ node app
```

## Try to update
1. use another machine to carry on git clone any repo. and create a testing branch (e.g. test-git-pull) 
2. create .env file to set 'YOUR_PROJECT_PATH' (e.g. YOUR_PROJECT_PATH=/c/dev-practice/anyProject)
3. make some changes for the repo
4. git add, commit and push the changes
5. visit 'localhost:4000' (to run the script)
6. check the machine with this express web server 

