#!/usr/bin/env bash

rsync -a --exclude \*.map --exclude asset-manifest.json build/ $1

# remove source map urls, to make Safari happy
perl -pi -e 's!^//# sourceMappingURL=.*$!!' $1/static/js/main.*.js $1/static/css/main.*.css
