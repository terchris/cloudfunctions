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
    var text = "Hello";
    var text_from_env = process.env.HELLO_TXT;
    text = text + "From .env: " + text_from_env+ " :";
    response.send(text + " Debugging locally !!. Maintained in vscode, pushed to github, mirrored to goole repository, deployed to cloud functions");
   });
