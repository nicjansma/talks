# NodeJS for Other Things

# Command-Line

## Sample App - Reading CSV Crime Data

First, create an empty directory, and `npm init` in it
```
mkdir crimedata
cd crimedata
npm init
```

```
{
  "name": "crimedata",
  ...
  "bin": {
      "crimedata": "./index.js"
  }
}

```

```
#!/usr/bin/env node

console.log('Hello');
```

```
npm install -g
snippet
```

### Reading CSV

http://csv.adaltas.com/

```
npm install --save csv-parse
```

Example
```
var parse = require("csv-parse");
parse(
    fs.readFileSync(inputFile, "utf-8"),
    {
        delimiter: ",",
        ltrim: true,
        rtrim: true,
        columns: true
    },
    function (err, data) { ... });
```

### Showing a table

https://github.com/Automattic/cli-table

```
npm install --save cli-table
```

Example:

```
┌──────────────────────────────┬──────────┬──────────┐
│ District                     │ Count    │ %        │
├──────────────────────────────┼──────────┼──────────┤
│ 1                            │ 868      │ 11       │
├──────────────────────────────┼──────────┼──────────┤
│ 2                            │ 1462     │ 19       │
├──────────────────────────────┼──────────┼──────────┤
│ 3                            │ 1575     │ 21       │
├──────────────────────────────┼──────────┼──────────┤
│ 4                            │ 1161     │ 15       │
├──────────────────────────────┼──────────┼──────────┤
│ 5                            │ 1159     │ 15       │
├──────────────────────────────┼──────────┼──────────┤
│ 6                            │ 1359     │ 18       │
├──────────────────────────────┼──────────┼──────────┤
│ Total                        │ 7584     │ 100      │
└──────────────────────────────┴──────────┴──────────┘
```

### Color

Using `chalk`!

https://github.com/chalk/chalk

### Big Files

https://github.com/Osterjour/line-by-line

```
npm install line-by-line
```

```
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('big_file.txt');

lr.on('error', function (err) {
    // 'err' contains error object
});

lr.on('line', function (line) {
    // 'line' contains the current line without the trailing newline character.
});

lr.on('end', function () {
    // All lines are read, file is closed now.
});
```

### Progress bars

https://github.com/tj/node-progress

Installation:

```
npm install progress
```

Example:

```
var ProgressBar = require('progress');

var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);
```

```
=====================================------------------------------------------------- 43%: 137614 / 318528 2.8 (s) left
```

### Prompting for Questions

https://github.com/SBoudrias/Inquirer.js

Installation:

```
npm install inquirer
```

Usage:

```
var inquirer = require("inquirer");
inquirer.prompt([/* Pass your questions in here */], function( answers ) {
    // Use user feedback for... whatever!!
});
```

### Program Choices

https://github.com/tj/commander.js/


```
npm install --save commander
```

```
var program = require('commander');

program
    .arguments('<file>')
    .option('-u, --username <username>', 'The user to authenticate as')
    .option('-p, --password <password>', 'The user\'s password')
    .action(function(file) {
        console.log('user: %s pass: %s file: %s',
        program.username, program.password, file);
        })
    .parse(process.argv);
```

# Quick Apps

## HTTP server

Author: Marak Squires

> a simple zero-configuration command-line http server

https://github.com/indexzero/http-server

Installation:
```
npm install http-server -g
```

Usage:
```
http-server [path] [options]
```

# Robotics

## Projects

* http://nodebots.io/ - Robots powered by JavaScript
* https://github.com/rwaldron/johnny-five - JavaScript Robotics and IoT programming framework
    > JavaScript Robotics and IoT programming framework

    > Arduino (all models), Electric Imp, Beagle Bone, Intel Galileo & Edison, Linino One, Pinoccio, pcDuino3, Raspberry Pi, Particle/Spark Core & Photon, Tessel 2, TI Launchpad and more
* https://cylonjs.com/ - Cylon

## Spark (Particle) Photon Example w/ Cylon

http://cylonjs.com/documentation/platforms/particle/

Installation:
```
npm init
npm install --save cylon
npm install --save cylon cylon-spark
```

Uses:

    http://voodoospark.me/

    https://raw.githubusercontent.com/voodootikigod/voodoospark/master/firmware/voodoospark.cpp

Deploy via:

    http://build.particle.io

Run this to get your local IP address:
```
curl "https://api.spark.io/v1/devices/{DEVICE-ID}/endpoint?access_token={ACCESS-TOKEN}"
```

Result:
```
{
  "cmd": "VarReturn",
  "name": "endpoint",
  "result": "192.168.1.10:48879",
  "coreInfo": {
    "last_app": "",
    "last_heard": "2014-05-08T02:51:48.826Z",
    "connected": true,
    "deviceID": "{DEVICE-ID}"
  }
}
```

# Desktop Automation

https://github.com/octalmage/robotjs

Example interaction on the Node.js REPL:
    > require("openurl").open("http://rauschma.de")
    > require("openurl").open("mailto:john@example.com")
Install via npm:
    npm install openurl
