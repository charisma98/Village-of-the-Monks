const axios = require('axios')

exports.handler = async (event, context, callback) => {
    console.log('Getting instagram feed');

    const {hashtag} = JSON.parse(event.body);
    console.log(hashtag);
    // const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    // const url = `${corsAnywhere}https://www.instagram.com/explore/tags/${hashtag}/?__a=1`;
    // const headers = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Methods': 'GET'
    // };


    // axios.get(url, {headers}).then(response => {
    //     const data = response.data;
    //     callback(null, {
    //         statusCode: 200,
    //         headers,
    //         body: JSON.stringify(data)
    //     });
    // })

}
