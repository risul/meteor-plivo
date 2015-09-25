plivo = Npm.require('plivo');

var options = {
    authId: process.env.PLIVO_AUTH_ID || Meteor.settings.plivo.authId,
    authToken: process.env.PLIVO_AUTH_TOKEN || Meteor.settings.plivo.authToken
};

if (options.authId && options.authToken) {
    Plivo = plivo.RestAPI({
        authId: Meteor.settings.plivo.authId,
        authToken: Meteor.settings.plivo.authToken
    });
} else throw new Meteor.Error(404, 'Plivo AUTH ID & AUTH TOKEN not found!');