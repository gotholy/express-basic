import express from "express";
const PORT = 9999;
const app = express();

app.use(express.static("pages"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/about", (req, res) => {
  res.end("about.html");
});
app.get("/work", (req, res) => {
  res.end("work.html");
});
app.get("/gallery", (req, res) => {
  res.end("gallery.html");
});

app.listen(PORT, () => {
  console.log("Server läuft");
});
