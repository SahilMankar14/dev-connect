const router = require("express").Router();
const { insertPersonalInfo } = require("../controller/personalnfoController");

router.post("/personalinfo", insertPersonalInfo);

module.exports = router;
