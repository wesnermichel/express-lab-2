const express = require("express");
const app = express();
const port = 4000;

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;  // this took me some time to remember to do this , I kept onb using just req.params at first
  res.send("Hello there, " + name);
});

app.get("/tip/:total/:tipPercentage", (req,res) =>{
    res.send( req.params.tipPercentage )
    console.log(tip,"tip" ) 
})
 

app.listen(port, () => { 
  console.log(`Server is listening to PORT ${port} `);
});
