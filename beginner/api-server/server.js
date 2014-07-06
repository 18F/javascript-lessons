var express = require('express');
var app = express();
var request = require('request');
var cors = require('cors');
app.use(cors());

var big_huge_labs_key = process.env.BIG_HUGE_LABS_KEY;
app.get('/synonym1/:word', function(req, res){
    // "Mojosa!" is the Esperanto synonym for "cool"
    var result = "";
    if (req.params.word == "cool") {
       result = "Mojosa";
    } else {
       result = "no synonym known for:"+req.params.word;
    }
    res.send(result);
});

app.get('/synonym2/:word', function(req, res){
    // "Mojosa!" is the Esperanto synonym for "cool"
    var result = "";
    var url = "http://words.bighugelabs.com/api/2/"+big_huge_labs_key+"/"+req.params.word+"/json";

//    console.log(url);

    // request module is used to process the yql url and return the results in JSON format
    request(url, function(err, resp, body) {
	body = JSON.parse(body);
	result = body;
//	console.log("result = "+result);
	res.send(result);
    });

    // pass back the results to client side

});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
