const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Connect Database
mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

app.get('/' , (req, res)=>{
  res.end('Image CRUD with Cloudinary in MERN Stack')

})

// Route
app.use("/image", require("./routes/image"));

app.listen(5000, () => console.log("Server is running"));
