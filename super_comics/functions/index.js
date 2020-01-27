const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /SuperComics/:pushId/original
exports.updateNextChoice = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const newTimeout = req.body.timeout

    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/SuperComics').update({next_choice:parseInt(newTimeout)}).then(snapshot => {
      return res.send({success: 1})
    })
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
});

exports.updateIsReady = functions.https.onRequest(async (req, res) => {

  // Grab the text parameter.
  const newReadyState = req.body.isReady

  if(newReadyState !== "true" && newReadyState !== "false") {return res.send({success: 0})}
  
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/SuperComics').update({isReady: (newReadyState === "true")}).then(snapshot => {
    return res.send({success: 1})
  })
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});


exports.updateDecision = functions.https.onRequest(async (req, res) => {

  // Grab the text parameter.
  const newDecisionState = req.body.decisionClosed

  if(newDecisionState !== "true" && newDecisionState !== "false") {return res.send({success: 0})}
  
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/SuperComics/decision').update({decisionClosed: (newDecisionState === "true")}).then(snapshot => {
    return res.send({success: 1})
  })
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});