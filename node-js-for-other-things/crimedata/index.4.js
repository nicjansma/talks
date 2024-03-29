#!/usr/bin/env node
var parse = require("csv-parse");
var fs = require("fs");
var Table = require("cli-table");
var chalk = require("chalk");

var inputFile = process.argv[2];
console.log("Reading", inputFile);

var input = fs.readFileSync(inputFile, "utf-8");

var districts = {};

parse(input, {delimiter: ",", ltrim: true, rtrim: true, columns: true}, function (err, data) {
    if (err) {
        console.error(err);
    }

    for (var i = 0; i < data.length; i++) {
        districts[data[i].district] = districts[data[i].district] || 0;
        districts[data[i].district]++;
    }

    var table = new Table({
        head: ["District", "Count", "%"],
        colWidths: [30, 10, 10]
    });

    for (var d in districts) {
        var pct = Math.round(districts[d] / data.length * 100);
        if (pct > 20) {
            pct = chalk.underline(chalk.red(pct));
        }
        table.push([d, districts[d], pct]);
    }

    table.push(["Total", data.length, "100"]);

    console.log(table.toString());
});
