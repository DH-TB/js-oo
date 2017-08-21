const request = require('superagent');

modelu.exports = {
    get: (url)=> {
        request
            .get(url)
            .end((err, res)=> {

            })
    },
    post: (url, data)=> {
        request
            .post(url)
            .send(data)
            .end((err, res)=> {

            })
    }
};