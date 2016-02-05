#!/usr/bin/env node
var parse = require("csv-parse");
var fs = require("fs");
var Table = require("cli-table");
var chalk = require("chalk");
var LineByLineReader = require('line-by-line');

var inputFile = process.argv[2];
console.log("Reading", inputFile);

lr = new LineByLineReader(inputFile);

var districts = {};
var total = 0;

lr.on('line', function (line) {
    districts[line] = districts[line] || 0;
    districts[line]++;
    total++;
});

lr.on('end', function () {
    var table = new Table({
        head: ["District", "Count", "%"],
        colWidths: [30, 10, 10]
    });

    for (var d in districts) {
        var pct = Math.round(districts[d] / total * 100);
        if (pct > 20) {
            pct = chalk.underline(chalk.red(pct));
        }
        table.push([d, districts[d], pct]);
    }

    table.push(["Total", total, "100"]);

    console.log(table.toString());
});
