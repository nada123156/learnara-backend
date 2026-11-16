
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// First API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Learnara API is running"
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Learnara server is running on port ${PORT}`);
});
