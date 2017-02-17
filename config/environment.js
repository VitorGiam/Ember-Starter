/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'renans2',
    environment: environment,
    contentSecurityPolicy:{'conect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com"},
    firebase: {
      apiKey: "AIzaSyCpB6osa-jKW8HW7AfVZia2vnFc1esRm1c",
      authDomain: "meuincrivelprojeto.firebaseapp.com",
      databaseURL: "https://meuincrivelprojeto.firebaseio.com",
      storageBucket: "meuincrivelprojeto.appspot.com",
      messagingSenderId: "634839505681"
    },
    
    locationType: 'auto',
    EmberENV: { //
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
  };
