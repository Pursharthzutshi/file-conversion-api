#!/bin/bash

GITHUB_USER="Pursharthzutshi"
GITHUB_TOKEN="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"  

REPO_NAME="file-conversion-api"

# response=$(curl -s -u "$GITHUB_USER:$GITHUB_TOKEN" https://api.github.com/user/repos -d "{\"name\":\"$REPO_NAME\"}")

# if echo "$response" | grep -q "full_name"; then
#   echo "Repository $REPO_NAME created successfully!"
# else
#   echo "Error creating repository. Response: $response"
#   exit 1
# fi

# mkdir $REPO_NAME
# cd $REPO_NAME
git init

# git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git

echo "# $REPO_NAME" > README.md
git add .
git commit -m "Adding file conversion api"
git branch -M main
git push -u origin main 

echo "Repository $REPO_NAME created and pushed successfully!"