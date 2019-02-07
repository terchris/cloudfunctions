const functions = require('firebase-functions');

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
    var text = "Hello!!! ";
    var text_from_env = process.env.HELLO_TXT;
    var home = process.env.HOME;
    var env_vars = JSON.stringify(process.env,null,2);
    text = text + "process.env.HELLO_TXT: (" + text_from_env+ ") : Home is : (" + home +") ALL env is : " + env_vars;
    response.send(text + " Testing env");
   });
