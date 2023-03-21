const express = require("express");
const app = express();
const port = 4000;

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;
  res.send("Hello there, " + name);


});

app.listen(port, () => {
  console.log(`Server is listening to PORT ${port} `);
});
