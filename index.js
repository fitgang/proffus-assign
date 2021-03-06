const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.get("/categories", (req, res) => {
  const categories = [{
      name: "fish",
      image: "/public/images/fish.jpg"
    },
    {
      name: "crustaceans",
      image: "/public/images/fish.jpg"
    },
    {
      name: "exotic",
      image: "/public/images/fish.jpg"
    }
  ];
  res.json(categories)
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});