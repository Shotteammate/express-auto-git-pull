#!/bin/bash
repo="YOUR_PROJECT_PATH does not exist"

if [ -f .env ]; then
    # Load Environment Variables
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
    # $YOUR_PROJECT_PATH (example): /c/dev-practice/anyProject
    repo="$YOUR_PROJECT_PATH"
fi

echo "****** getting latest for "${repo}" ******"

cd "${repo}"
git checkout test-git-pull
git pull

echo "****** completed ******"