const FB = require('fb')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('871927269871-hg4c69m170fdd8o8u90gfhbmr93gpstn.apps.googleusercontent.com');
const User = require('../models/userModel')

const thisService = {
    async getFacebookUserData(accessToken) {
        console.log(accessToken)
        const data = await FB.api('me', {
            fields: ['id', 'email', 'first_name', 'last_name'].join(','), access_token: accessToken,
        });

        console.log(data);
        const facebookUser = new User();
        facebookUser.userName = data.email,
            facebookUser.firstName = data.first_name,
            facebookUser.lastName = data.last_name,
            facebookUser.email = data.email,
            await facebookUser.save()

        resData = {
            Message: 'Auth Successful', token: accessToken
        }
        return resData
    },
    async verifyGoogle(idToken) {
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: '871927269871-hg4c69m170fdd8o8u90gfhbmr93gpstn.apps.googleusercontent.com',
        });

        const payload = ticket.getPayload();

        const googleUser = new User();
        googleUser.userName = payload.given_name,
            googleUser.firstName = payload.given_name,
            googleUser.lastName = payload.family_name,
            googleUser.email = payload.email
        await googleUser.save()
        resData = {
            Message: 'Auth Successful'
        }
        return resData

    }
}

module.exports = thisService