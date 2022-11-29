# Wheel of Emotions

## Introduction

This repository is part of a bigger project: an app which has a clickable, spinnable wheel of emotions ([example](http://images.google.com/images?q=emotion%20wheel)).

The code in this repository provides a way to convert svg `<text>` to `<path>`. This is needed because Android Studio does not support `<text>` in svg files.

The code is adopted from ([paulzi's](https://github.com/paulzi/svg-text-to-path)) repository.

## Usage

1. Run `index.js`
2. Open `localhost:3000`
3. Click `Convert` button (given that the file `feelings.svg` exists in `files` directory)
4. Resulting svg code should be visible and can be saved by clicking `Save` button
