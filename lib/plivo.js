plivo = Npm.require('plivo');


if (Meteor.settings.plivo){
    Plivo = plivo.RestAPI({
        authId: Meteor.settings.plivo.authId,
        authToken: Meteor.settings.plivo.authToken
    });
} else {
    throw new Meteor.Error(404, 'Plivo AUTH ID & AUTH TOKEN not found in settings');
}