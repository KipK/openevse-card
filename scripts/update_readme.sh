#!/bin/sh

set -e

VERSION=$1
BRANCH=$2

if [ -z "${VERSION}" ]; then
  echo "Version not specified; Exiting."
  exit 1;
fi
if [ -z "${BRANCH}" ]; then
  echo "Branch not specified; Exiting."
  exit 1;
fi

if [ ! "${BRANCH}" = "refs/heads/master" ]; then
  echo "Branch is ${BRANCH}; README.md not updated."
  exit 0;
fi

sed -i -e "s/NEXT_VERSION/v${VERSION}/g" ./README.md
sed -i -e "s|https://github.com/KipK/openevse-card/releases/download/.*/openevse-card.js|https://github.com/KipK/openevse-card/releases/download/v${VERSION}/openevse-card.js|g" ./README.md
sed -i -e "s|-\surl:\s/local/openevse-card.js?v=.*|- url: /local/openevse-card.js?v=${VERSION}|g" ./README.md