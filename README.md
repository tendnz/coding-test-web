# "Now Showing" Films

The aim of this exercise is to build a mobile web UI for a list of "now showing" films.

The design is a simple list view which shows each film's title, image, box office revenue, and a link to more info. It can be viewed [here](now-showing-example.png).

There is also a design for a detail page [here](detail-example.png).

The film data is originally from IMDB but has been hardcoded in this repository for convenience. You don't need to fetch any data from the live api.

To complete this exercise, use the `fetchFilms` function in `api.ts` and build your own React components to render the film data. Building the detail page is optional. If you build this page, implement routing so that the 'more info' link navigates to the detail page and use the `fetchFilmById` function.

We've added `node-sass` as a dependency so you can use [SASS](https://sass-lang.com/) for styling if you like - or you can use any other CSS framework if you prefer.

## Running this project

This project has been set up with [Create React App](https://facebook.github.io/create-react-app) and [Typescript](https://www.typescriptlang.org/).

To get started, run the following:

```
git clone https://github.com/tendnz/coding-test-web
cd coding-test-web
yarn install # or npm install
yarn start # or npm start
```

You can commit your changes locally but do not push them. When you're done, zip the folder (excluding node_modules) and email it to us for review.

We have added [Prettier](https://prettier.io/) and integrated it with [ESLint](https://eslint.org/). You should ensure your submitted code is nicely formatted and linted.

## Guidelines

Things we're looking for:

- Matching the design as closely as possible
- Clear naming
- Well-considered component separation and interfaces
- Simplicity

Things we're not looking for:

- Writing automated tests
- Responsive design or any consideration of a desktop view
