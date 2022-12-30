// write me a simple express server that listens on port 3000 and has upload POST route
// that accepts an image file, logs the file name to the console and returns a JSON response
// with message: 1 if everything worked or 0 if there was an error

const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const app = express();

app.use(cors());

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};


app.post(
  "/upload",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./uploads/image.png");

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);
        res.json({ message: 1 });
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);
        res.json({ message: 0 });
      });
    }
  }
);

// make simple GET test route sending back a JSON response
app.get('/test', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(3000, () => console.log('Server listening on port 3000'));




