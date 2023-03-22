const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send(
    "99 Bottles of beer on the wall <a href='/98' >take one down, pass it around</a>"
  );
});

app.get("/:number_of_bottles", (req, res) => {
  let current = req.params.number_of_bottles;
  let number = current - 1;
  if (current == 0) {
    res.send(
      current + ` No bottles left! Let's play again <a href='/100'>Start Again!</a>`
    );
  } else {
    res.send(
      current +
       ` Bottles of beer on the wall  <a href='/${number}'>take one down, pass it around</a>`
    );
  }
});

app.listen(port, () => {
  console.log(`Server is listening to PORT ${port} `);
});
