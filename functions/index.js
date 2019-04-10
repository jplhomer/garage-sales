const functions = require("firebase-functions");

// CORS Express middleware to enable CORS Requests.
const cors = require("cors")({
  origin: true
});

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.getGarageSales = functions.https.onCall((_data, _context) => {
  return db
    .collection("sales")
    .get()
    .then(snapshot => {
      const data = snapshot.docs.map(doc => {
        return Object.assign({}, doc.data(), {
          id: doc.id,
          htmlDescription: getHtmlDescription(doc.data())
        });
      });

      return data;
    });
});

exports.addGarageSale = functions.https.onCall((data, context) => {
  console.log(data);
  return db.collection("sales").add(data);
});

function getHtmlDescription(data) {
  return `<b>${data.address}</b><br>
      Hours: ${data.startTime} - ${data.endTime}<br>
      <p>${data.description}</p>`;
}
