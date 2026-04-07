
const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/process", (req, res) => {
  const { url } = req.body;
  res.json({
    success: true,
    data: { videoUrl: url }
  });
});

app.listen(3000, () => console.log("API running"));
