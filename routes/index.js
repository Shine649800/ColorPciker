var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    color: "#FFFFFF"
  });
});

module.exports = router;
router.post('/', function(req, res){
  res.render('index',{
    color:req.body.colorPicker,
    textColor:req.body.text
  })
});

router.post('/random', function(req, res){
  res.render('index',{
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode()
  })
});

function generateRandomHexCode() {
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}