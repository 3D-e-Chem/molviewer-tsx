#!/usr/bin/env bash

rsync -a --exclude asset-manifest.json build/static/ ../knime-molviewer/plugin/src/main/js-lib/molviewer
rm -rf ../knime-molviewer/plugin/src/main/js-lib/molviewer/css/static
mkdir ../knime-molviewer/plugin/src/main/js-lib/molviewer/css/static
mv ../knime-molviewer/plugin/src/main/js-lib/molviewer/media ../knime-molviewer/plugin/src/main/js-lib/molviewer/css/static/
