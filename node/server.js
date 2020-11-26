const http = require("http");

function willItBlend(callback) {
  // should be true for anything divisible by 3 between 0 and 9
  const itBlends = Math.floor(Math.random() * 10) % 3 === 0;

  if (itBlends) {
    callback(null, "Good news! It Blends!");
  } else {
    callback(new Error("Oh No! It didn't Blend!"));
  }
}

//create a server object:
const path = require('path');
const fs = require('fs');


http.createServer(function(req, res) {
    willItBlend((err, data) => {
        if (err) {
            res.write(err.message)
            console.log(err)
        } else {
            res.write(data)
            console.log(data)
    }
});
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080


// this is a fork of https://codesandbox.io/s/rl9v3156lp
