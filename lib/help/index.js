/**
 * Module dependencies.
 */

var config = require('lib/config');
var express = require('express');
var app = module.exports = express();

app.get('/help', require('lib/layout'));
app.get('/help/markdown', require('lib/layout'));
if (config('tos enabled')) {
  app.get('/help/terms-of-service', require('lib/layout'));
}
if (config('pp enabled')) {
  app.get('/help/privacy-policy', require('lib/layout'));
}
if (config('faq enabled')) {
  app.get('/help/faq', require('lib/layout'));
}
