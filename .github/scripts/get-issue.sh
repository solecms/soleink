#!/usr/bin/env bash

SECRET=$1
OWNER=$2
REPO=$3
ISSUE_NUMBER=$4

if [ -z "$SECRET" ] || [ -z "$OWNER" ] || [ -z "$REPO" ] || [ -z "$ISSUE_NUMBER" ]; then
    echo "Usage: $0 <SECRET> <OWNER> <REPO> <ISSUE_NUMBER>"
    exit 1
fi

issue=$(curl -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $SECRET" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/repos/$OWNER/$REPO/issues/$ISSUE_NUMBER)


echo "ISSUE=$(echo "$issue" | jq -c .)" >> $GITHUB_ENV
