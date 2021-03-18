var express = require('express');
const util = require("../utils/util");
const ctrl = require("../controllers/mycontroller");
const auth = require("../middlewares/auth");

var router = express.Router();

router.get('/', ctrl.healthCheck);
router.post('/zoomuserInfo', auth.addToken, ctrl.zoomuserInfo);
router.post('/createzoommeeting', auth.addToken, ctrl.createZoomMeeting);

module.exports = router;
