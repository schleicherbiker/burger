const express = require("express");
const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    
    create: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
}
module.exports = burger;