const express = require("express");
const app = express();
const port = 5000;
const connectdb = require("./db");
connectdb();
const cors = require("cors")
app.use(cors({
  origin:"http://localhost:3000"
}))
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     // "Access-Control-Allow-Origin",
//     "origin,  X-requested-With ,Control-Type, Accept"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(express.json());
app.use("/api", require("./Routes/Createuser"));
app.use("/api", require("./Routes/Displaydata"));

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
