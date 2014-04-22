#! /usr/bin/env node

var vid = require("./sauce.js");
var jobId = process.argv[2];

vid(jobId);
