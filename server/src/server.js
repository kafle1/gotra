const http = require("http");
const mongoose = require("mongoose");
const app = require("./app.js");



const PORT = process.env.PORT || 5000;
const CONNECTION_PORT = "mongodb://localhost:27017/test";


const server = http.createServer(app);

mongoose
  .connect(CONNECTION_PORT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server Running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
