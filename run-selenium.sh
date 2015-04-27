#!/bin/bash

echo "** UPDATING SELENIUM"
echo "   (this may take a while)"
./node_modules/.bin/webdriver-manager update
echo "** DONE"
echo
echo "** STARTING SELENIUM"
./node_modules/.bin/webdriver-manager start

