#!/usr/bin/env node

module.exports = function (name, drunk, callback) {
	var res = ""
	if (drunk) {
		res = "hello " + name + ", you look sexy today"
	} else {
		res = "hello, " + name;
	}
	callback(res)
}
