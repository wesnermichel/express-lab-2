const express = require("express");
const app = express();
const port = 4000;

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name; // this took me some time to remember to do this , I kept onb using just req.params at first
  res.send("Hello there, " + name);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(req.params.tipPercentage);
  console.log(tip, "tip");
});

app.get("/magic/:question", (req, res) => {
  const query = req.params.question;
  const array = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const randomAnswer = array[Math.floor(Math.random() * array.length)];


res.send(query + "? <h1> Hmmm, here is what I think:</h1>" + randomAnswer);
});
app.listen(port, () => {
  console.log(`Server is listening to PORT ${port} `);
});
