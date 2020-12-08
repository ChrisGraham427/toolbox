const express = require("express");
const app = express();
const cors = require("cors");
const projectRoutes = require("./routes/project");
const contactRoutes = require("./routes/contact");
const imageRoutes = require("./routes/image");
app.use(express.json());

app.use(cors());

app.use("/project", projectRoutes);
app.use("/contact", contactRoutes);
app.use("/image", imageRoutes);

app.listen(8080, () => {
  console.log(`listening at 8080`);
});
