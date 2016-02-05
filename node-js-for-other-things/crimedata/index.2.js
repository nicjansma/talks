#!/usr/bin/env node
var parse = require("csv-parse");
var fs = require("fs");

var inputFile = process.argv[2];
console.log("Reading", inputFile);

var input = fs.readFileSync(inputFile, "utf-8");

parse(input, {delimiter: ",", ltrim: true, rtrim: true, columns: true}, function (err, data) {
    if (err) {
        console.error(err);
    }

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        //console.log(data[i].district);
    }
});
