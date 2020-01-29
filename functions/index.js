/* eslint-disable */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


//Super_comics

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /SuperComics/:pushId/original
exports.updateNextChoice = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const newTimeout = req.body.timeout

    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/SuperComics/next_choice').update({val:parseInt(newTimeout)}).then(snapshot => {
      return res.send({success: 1})
    })
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
});

exports.updateIsReady = functions.https.onRequest(async (req, res) => {

  // Grab the text parameter.
  let newReadyState = req.body.isReady

  if(typeof newReadyState === "string") {newReadyState = (newReadyState === "true")}

  if(newReadyState !== true && newReadyState !== false) {return res.send({success: 0})}
  
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/SuperComics/isReady').update({val: newReadyState}).then(snapshot => {
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
  const snapshot = await admin.database()
  .ref('/SuperComics/decision/decisionClosed')
  .update({val: (newDecisionState === "true")})
  .then(snapshot => {
    return res.send({success: 1})
  })
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

exports.increaseVote = functions.https.onRequest(async (req, res) => {

  // Grab the text parameter.
  const newVote = req.body.vote

  const endpoint = "/SuperComics/decision/choices/choices/" + newVote
  admin.database()
    .ref(endpoint)
    .push(0)
    .then(snapshot => {
      return res.send({success: 1})
    })
});

exports.getWinner = functions.https.onRequest(async (req, res) => {

  const endpoint = "/SuperComics/decision/choices/choices/"
  admin.database()
    .ref(endpoint)
    .once("value", function(snap) {
      return res.send({winner: snap.child('choice1').numChildren() > snap.child('choice2').numChildren() ? 1 : 2 })
    });
});

exports.resetChoices = functions.https.onRequest(async (req, res) => {

  const endpoint = "/SuperComics/decision/choices"
  admin.database()
    .ref(endpoint)
    .update({choices: {
      choice1: [0],
      choice2: [0],
      choice3: [0]
    }})
    .then(snapshot => {
      return res.send({success: 1})
    })
});


//Kwan

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /SuperComics/:pushId/original
exports.kwan_updateNextChoice = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const newTimeout = req.body.timeout

  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/Kwan/next_choice').update({val:parseInt(newTimeout)}).then(snapshot => {
    return res.send({success: 1})
  })
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

exports.kwan_updateIsReady = functions.https.onRequest(async (req, res) => {

// Grab the text parameter.
let newReadyState = req.body.isReady

if(typeof newReadyState === "string") {newReadyState = (newReadyState === "true")}

if(newReadyState !== true && newReadyState !== false) {return res.send({success: 0})}

// Push the new message into the Realtime Database using the Firebase Admin SDK.
const snapshot = await admin.database().ref('/Kwan/isReady').update({val: newReadyState}).then(snapshot => {
  return res.send({success: 1})
})
// Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
res.redirect(303, snapshot.ref.toString());
});


exports.kwan_updateDecision = functions.https.onRequest(async (req, res) => {

// Grab the text parameter.
const newDecisionState = req.body.decisionClosed

if(newDecisionState !== "true" && newDecisionState !== "false") {return res.send({success: 0})}

// Push the new message into the Realtime Database using the Firebase Admin SDK.
const snapshot = await admin.database()
.ref('/Kwan/decision/decisionClosed')
.update({val: (newDecisionState === "true")})
.then(snapshot => {
  return res.send({success: 1})
})
// Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
res.redirect(303, snapshot.ref.toString());
});

exports.kwan_increaseVote = functions.https.onRequest(async (req, res) => {

// Grab the text parameter.
const newVote = req.body.vote

const endpoint = "/Kwan/decision/choices/choices/" + newVote
  admin.database()
    .ref(endpoint)
    .push(0)
    .then(snapshot => {
      return res.send({success: 1})
    })
});

exports.kwan_getWinner = functions.https.onRequest(async (req, res) => {

  const endpoint = "/Kwan/decision/choices/choices/"
  admin.database()
    .ref(endpoint)
    .once("value", function(snap) {
      return res.send({winner: snap.child('choice1').numChildren() > snap.child('choice2').numChildren() ? 1 : 2 })
    });
});

exports.kwan_resetChoices = functions.https.onRequest(async (req, res) => {

const endpoint = "/Kwan/decision/choices"
admin.database()
  .ref(endpoint)
  .update({choices: {
    choice1: [0],
    choice2: [0],
    choice3: [0]
  }})
  .then(snapshot => {
    return res.send({success: 1})
  })
});