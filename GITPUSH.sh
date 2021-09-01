#!/bin/sh
git add .
git commit -m "double tap on mobile dont zoom"
git push -u origin main

yarn build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages