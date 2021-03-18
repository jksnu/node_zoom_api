const SendResponse = require("../utils/sendresponse");
const axios = require('axios');
const rp = require('request-promise');
const util = require("../utils/util");
const sendResponse = new SendResponse();

function healthCheck(req, res, next) {
    try {
        sendResponse.setSuccess(200, 'Success', "API is running");
        return sendResponse.send(res);   
    } catch (error) {
        console.log(error);
    }
}

async function zoomuserInfo(req, res, next) {
    try { 
        const token = req.body.token;
        const email = 'jksnu1@gmail.com';
        const result = await axios.get("https://api.zoom.us/v2/users/"+email, {          
            headers: {
                'Authorization': 'Bearer ' + token,
                'User-Agent': 'Zoom-api-Jwt-Request',
                'content-type': 'application/json'
            }
        });
        sendResponse.setSuccess(200, 'Success', result.data);
        return sendResponse.send(res);   
    } catch (error) {
        console.log(error.message);
        next();
    }
}

async function createZoomMeeting(req, res, next) {
    try {
        const token = req.body.token;
        const email = 'jksnu1@gmail.com';
        const result = await axios.post("https://api.zoom.us/v2/users/"+email+"/meetings", {
            "topic": "Discussion about today's Demo",
            "type": 2,
            "start_time": "2021-03-18T17:00:00",
            "duration": 20,
            "timezone": "India",
            "password": "1234567",
            "agenda": "We will discuss about Today's Demo process",
            "settings": {
                "host_video": true,
                "participant_video": true,
                "cn_meeting": false,
                "in_meeting": true,
                "join_before_host": false,
                "mute_upon_entry": false,
                "watermark": false,
                "use_pmi": false,
                "approval_type": 2,
                "audio": "both",
                "auto_recording": "local",
                "enforce_login": false,                
                "registrants_email_notification": false,
                "waiting_room": true,
                "allow_multiple_devices": true
            }
        }, {          
            headers: {
                'Authorization': 'Bearer ' + token,
                'User-Agent': 'Zoom-api-Jwt-Request',
                'content-type': 'application/json'
            }
        });
        sendResponse.setSuccess(200, 'Success', result.data);
        return sendResponse.send(res);
    } catch (error) {
        console.log(error.message);
        next();
    }
}

/*function zoomuserInfo(req, res, next) {
    try{
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNMWVAzNEVYUTdTRFMtUHVlV2NrX3ciLCJleHAiOjE2MTY2NTIzNDUsImlhdCI6MTYxNjA0NzU0Nn0.QI_-K6MN5FXaRyVJvNfBQ9VbVfSU-re60SQF6_QmNeY';
        const email = 'jksnu1@gmail.com';
        var options = {
        //You can use a different uri if you're making an API call to a different Zoom endpoint.
        uri: "https://api.zoom.us/v2/users/"+email, 
        qs: {
            status: 'active' 
        },
        auth: {
            'bearer': token
        },
        headers: {
            'User-Agent': 'Zoom-api-Jwt-Request',
            'content-type': 'application/json'
        },
        json: true //Parse the JSON string in the response
    };
    
    //Use request-promise module's .then() method to make request calls.
    rp(options)
        .then(function (response) {
          //printing the response on the console
            console.log('User has', response);
            //console.log(typeof response);
            resp = response
            //Adding html to the page
            var title1 ='<center><h3>Your token: </h3></center>' 
            var result1 = title1 + '<code><pre style="background-color:#aef8f9;">' + token + '</pre></code>';
            var title ='<center><h3>User\'s information:</h3></center>' 
            //Prettify the JSON format using pre tag and JSON.stringify
            var result = title + '<code><pre style="background-color:#aef8f9;">'+JSON.stringify(resp, null, 2)+ '</pre></code>'
            res.send(result1 + '<br>' + result);
     
        })
        .catch(function (err) {
            // API call failed...
            console.log('API call failed, reason ', err);
        });
    } catch(error) {
        console.log(error);
    }
}*/

module.exports = { healthCheck, zoomuserInfo, createZoomMeeting }