ClimateJS is just a sample app with unit test for JS made with React for a Job Oportunity

[![Build Status](https://travis-ci.org/alexandresebrao/ClimateJS.svg?branch=master)](https://travis-ci.org/alexandresebrao/ClimateJS)

![WeatherNow](https://raw.githubusercontent.com/alexandresebrao/ClimateJS/master/Example.PNG)

### Setup

You need to install NodeJS on your computer first

than on your console run

```sh
npm install
```

### Building the project

For creating a production ready bundle, just run

```sh
npm run build
```

and a build folder will be avaiable, if you want to serve localy just run after the build command

```sh
serve -s build
```

### Development Mode

If you want to edit the project and see changes during development, this project has Hot Reload! You just need to run

```sh
npm start
```

### Adding more cities to the project

Just edit

```
src/config.js
```

There will have more info on how to add the city

**Warning**: Adding more cities will break UnitTest, you will have to fix the test that broke and fix it. More info about testing is below

### Testing the project

To get coverage info and the unit test pipeline you just have to run

```sh
npm run test
```

It will create a coverage folder with an index.html so you can see the coverage status per file

During development you can run

```sh
npm run test:watch
```

as you edit any of the project file it will rerun all the tests and check if anything else did break.

### Contact Info

Created by: Alexandre Sebrão

Email: alexandre.sebrao@gmail.com

This software is licenseless, so you can use or modify it the way you want without worrying about it