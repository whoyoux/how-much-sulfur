#!/bin/sh
git add .
git commit -m "added some stuff"
git push -u origin main

yarn build
git add dist -f
git commit -m "addind dist"
git subtree push --prefix dist origin gh-pages