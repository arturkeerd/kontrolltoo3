const fs = require("fs/promises");
const bodyParser = require("body-parser")
const path = require("path");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "meals.json"); // Correct relative path
    const data = await fs.readFile(filePath, "utf-8"); // Read the file asynchronously
    const meals = JSON.parse(data); // Parse the JSON data
    res.json(meals); // Send the parsed data as a response
  } catch (error) {
    console.error("Error reading meals.json:", error); // Log any errors
    res.status(500).json({ message: "Failed to load meals data" }); // Send a 500 error response
  }
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3001);
