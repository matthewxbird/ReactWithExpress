const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// create a GET route
app.get("/api", (req, res) => {
  console.log("/api route");
  res.send({ express: "Hello" });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
