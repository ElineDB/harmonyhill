#!/bin/bash

set -e

npm run build --workspace=@harmonyhill/utils
npm run build --workspace=@harmonyhill/database

npm pack --workspace=@harmonyhill/utils --pack-destination apps/web
npm pack --workspace=@harmonyhill/database --pack-destination apps/web

npm pack --workspace=@harmonyhill/utils --pack-destination apps/functions
npm pack --workspace=@harmonyhill/database --pack-destination apps/functions

mv apps/web/harmonyhill-utils-*.tgz apps/web/harmonyhill-utils.tgz
mv apps/web/harmonyhill-database-*.tgz apps/web/harmonyhill-database.tgz

mv apps/functions/harmonyhill-utils-*.tgz apps/functions/harmonyhill-utils.tgz
mv apps/functions/harmonyhill-database-*.tgz apps/functions/harmonyhill-database.tgz

firebase deploy --only hosting