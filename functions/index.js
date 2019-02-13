const functions = require('firebase-functions');
const admin = require('firebase-admin');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
   response.send("Hello from terchris Firebase!");
});

exports.newFunction = functions.https.onRequest((request, response) => {
   response.send("Now. pushed to github. from there to Cloud Source Repositories");
});


exports.gitFunction = functions.https.onRequest((request, response) => {

   var text = "Hello LOCAL and CLOUD logging!!! ";
   //var text_from_env = process.env.HELLO_TXT;
   // Must be set first using: 
   // firebase functions:config:set myvariables.myvalue=jalla
   var text_from_env = functions.config().myvariables.myvalue;

   var home = process.env.HOME;
   var env_vars = JSON.stringify(process.env, null, 2);
   text = text + "process.env.HELLO_TXT: (" + text_from_env + ") : Home is : (" + home + ") ALL env is : " + env_vars;


   //Now adding logging from this example https://cloud.google.com/logging/docs/setup/nodejs
   // winston 3 example.
   const winston = require('winston');

   // Imports the Google Cloud client library for Winston
   const { LoggingWinston } = require('@google-cloud/logging-winston');

   // For running on in the cloud
   const loggingWinston = new LoggingWinston();

/***** NOT Needed - I dont know how this code connects to the correct stackdriver logging!
   // for running on local emulator
   const loggingWinston = new LoggingWinston({
      projectId: 'note-app-5c123',
      keyFilename: '/Users/tec/learn/firebase-functions/getstarted/functions/keys/mykeyfile.json',
    });   
*/
   // Create a Winston logger that streams to Stackdriver Logging
   // Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"
   const logger = winston.createLogger({
      level: 'info',
      transports: [
         new winston.transports.Console(),
         // Add Stackdriver Logging
         loggingWinston,
      ],
   });



   // Writes some log entries
   logger.error('6 myvariables.myvalue: ' + text_from_env);
   logger.info('6 all env vars: ' + env_vars);
   response.send(text + " logging 6");
});
