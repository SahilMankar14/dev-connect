const router = require("express").Router();
const {
  insertPersonalInfo,
  getPersonalInfo,
} = require("../controller/personalnfoController");

router.post("/personalinfo", insertPersonalInfo);
router.post("/getpersonalinfo", getPersonalInfo);

module.exports = router;
