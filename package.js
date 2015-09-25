Package.describe({
    name: 'risul:plivo',
    summary: 'Plivo NodeJS client packaged for Meteor',
    version: '1.0.0_3',
    git: 'https://github.com/risul/meteor-plivo'
});

Npm.depends({
    "plivo": '0.3.2'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.export('Plivo');
    api.addFiles('lib/plivo.js', 'server');
});