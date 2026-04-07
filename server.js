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

// مهم جدًا 👇
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("API running on " + PORT));
