require("dotenv").config()
const axios = require('axios');

const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = function(event, context, callback) {
  console.log('Here comes te magic');

  //-- We only care to do anything if this is our POST request.
  if(event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: ''
    });
  }

  //-- Parse the body contents into an object.
  const data = JSON.parse(event.body);
  
  // -- Make sure we have all required data. Otherwise, escape.
  if( !data.tag ) {
    console.error('Required information is missing.');
    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({status: 'missing-information'})
    });
    return;
  }

  axios.get(`https://${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/odriscolls/resources/image/tags/${data.tag}`).then(res => {
      callback(null, {
        statusCode,
        headers,
        body: JSON.stringify({res})
      });
    }
  )

  

}

