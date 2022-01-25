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
1. use another machine(B) to carry on git clone any repo. (can use current machine(A) if do not have another device) 
2. create a testing branch (e.g. test-git-pull) 
3. create .env file to set 'YOUR_PROJECT_PATH' (e.g. YOUR_PROJECT_PATH=/c/dev-practice/anyProject)
4. make some changes to the repo
5. git add, commit and push the changes
6. visit 'localhost:4000' in the machine(A) (to run the script)
7. check the machine(A) 

