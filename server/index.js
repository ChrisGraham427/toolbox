const express = require("express");
const app = express();
const cors = require("cors");
const projectRoutes = require("./routes/project");
const contactRoutes = require("./routes/contact");
const imageRoutes = require("./routes/image");
const path = require("path");
const multer = require("multer");

app.use(cors());

app.use(express.json());

//=====MULTER FILE UPLOAD
app.use(express.urlencoded({ extended: true }));
app.use("/image/images", express.static(path.join(__dirname, "/uploads")));
//======================================
app.use("/project", projectRoutes);
app.use("/contact", contactRoutes);
app.use("/image", imageRoutes);

app.listen(8080, () => {
  console.log(`listening at 8080`);
});
