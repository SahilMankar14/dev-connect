const router = require("express").Router();
const {
  insertPersonalInfo,
  getPersonalInfo,
  updatePersonalInfo,
} = require("../controller/personalnfoController");

router.post("/personalinfo", insertPersonalInfo);
router.post("/getpersonalinfo", getPersonalInfo);
router.post("/updatepersonalinfo", updatePersonalInfo);

module.exports = router;
