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
    response.send("YEY. Maintained in vscode, pushed to github, mirrored to goole repository, deployed to cloud functions");
   });
