# AmplifyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## version

$ node -v
v12.16.1

$ npm -v
6.14.8

## amplify command sample

$ npm install -g @aws-amplify/cli
$ amplify configure
$ amplify configure
$ ng new calms-app
$ cd calms-app
$ amplify init
$ npm install --save aws-amplify @aws-amplify/ui-angular
$ npm install
$ ng serve --open
$ amplify add auth
$ amplify push
$ amplify console
$ git add .
$ git commit -m "compleat auth"
$ history


## develop command sample

### yield
ng g c calms/yields/yield-aaa && ng g module calms/yields/yield-aaa --routing=true
ng g c calms/yields/yield-bbb && ng g module calms/yields/yield-bbb --routing=true
ng g c calms/yields/yield-ccc && ng g module calms/yields/yield-ccc --routing=true

### screen
ng g c calms/screens/aaa/screen-aaa-top && ng g module calms/screens/aaa/screen-aaa-top --routing=true
ng g c calms/screens/aaa/screen-aaa-x01 && ng g module calms/screens/aaa/screen-aaa-x01 --routing=true

ng g c calms/screens/bbb/screen-bbb-top && ng g module calms/screens/bbb/screen-bbb-top --routing=true
ng g c calms/screens/bbb/screen-bbb-x01 && ng g module calms/screens/bbb/screen-bbb-x01 --routing=true

ng g c calms/screens/ccc/screen-ccc-top && ng g module calms/screens/ccc/screen-ccc-top --routing=true
ng g c calms/screens/ccc/screen-ccc-x01 && ng g module calms/screens/ccc/screen-ccc-x01 --routing=true

## create compodoc

npx @compodoc/compodoc -p src/tsconfig.compodoc.json -d compodoc

