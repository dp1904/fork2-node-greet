#!/usr/bin/env node

var grt = require("../index.js")
var parseArgs = require('minimist')
var argv2 = parseArgs(process.argv, {'--': true})

grt(process.argv[2], argv2.drunk, function (res) {
	console.log(res)
})

