const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();


const app = require("./app.js");

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(
        `Server Running on http://localhost:${process.env.PORT} and Connected to MongoDB Successfully`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
