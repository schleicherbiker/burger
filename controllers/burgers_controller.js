const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all(function(data) {
        res.render("index", { burgers: data})  
    })
});

router.post("/", (req, res) => {
    burger.create(
        ["burger_name", "devoured", "date"],
        [JSON.stringify(req.body.burger_name), false, JSON.stringify(getDate())],
        () => {
            res.redirect("/");
        }
    );
});

router.put("/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;

function getDate() {
  var today = new Date();
  var dd = today.getDate(); 
  var mm = today.getMonth()+1;
  const yyyy = today.getFullYear();
  const hh = today.getHours(); 
  const min = today.getMinutes();
  const ss = today.getSeconds();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  return today = yyyy + '-' + mm + '-' + dd + " " + hh + ":" + min + ":" + ss;
}