const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
  try {
    res.send([global.fooditems,global.foodcategory]);
    console.log(global.fooditems);
  } catch (error) {
    console.erroe(error.message);
    res.send("server error");
  }
});

module.exports = router;
