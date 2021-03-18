var express = require('express');
const util = require("../utils/util");
const ctrl = require("../controllers/mycontroller");
const auth = require("../middlewares/auth");

var router = express.Router();

router.get('/', ctrl.healthCheck);
router.post('/zoomuserInfo', auth.addToken, ctrl.zoomuserInfo);
router.post('/createzoommeeting', auth.addToken, ctrl.createZoomMeeting);
router.post('/zoommeeting', auth.addToken, ctrl.getMeeting);
router.patch('/updatezoommeeting', auth.addToken, ctrl.updateMeeting);
router.delete('/deletezoommeeting', auth.addToken, ctrl.deleteMeeting);

module.exports = router;
