const FB = require('fb')

const thisService = {
    async getFacebookUserData(accessToken) {
        console.log(accessToken)
        const data = await FB.api('me', {
            fields: ['id', 'email', 'first_name', 'last_name'].join(','), access_token: accessToken,
        });
        console.log(data);
        return data;
    }
}

module.exports = thisService