// models/Article.js
//Article schema

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  sepractice: {
    type: String,
    required: true
  },
  claim: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  },
  researchtype: {
    type: String,
    required: true
  },
  participant: {
    type: String,
    required: true
  },
  journalname: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  volume: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  pages: {
    type: String,
    required: true
  },
  DOI: {
    type: String,
    required: true
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);