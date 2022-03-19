var express = require("express");
var router = express.Router();

router.post("/", async (req, res, next) => {
  let caseDetails = req.body;
  console.log("caseDetails", caseDetails);
  res.send("respond with a resource");
});

router.get("/:id", async (req, res, next) => {
  let caseId = req.params.id;
  console.log("caseId", caseId);
});

module.exports = router;
