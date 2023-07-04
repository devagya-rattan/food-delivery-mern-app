const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",
  body("email", "enter valid things").isEmail(),
  body("name", "enter valid things").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
// router.post(
//   "/loginuser",
//   body("email", "enter valid things").isEmail(),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     let email = req.body.email;
//     try {
//       let userdata = await User.findOne({ email });
//       if (!userdata) {
//         return res
//           .status(400)
//           .json({ errors: "try logiing with correct mail id" });
//       }
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

module.exports = router;
