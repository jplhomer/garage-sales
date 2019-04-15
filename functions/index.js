const functions = require("firebase-functions");

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
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called " + "while authenticated."
    );
  }

  data.email = context.auth.token.email;
  return db.collection("sales").add(data);
});

function getHtmlDescription(data) {
  return `<b>${data.address}</b><br>
      Hours: ${normalizeHour(data.startTime)} - ${normalizeHour(data.endTime)}<br>
      <p>${data.description}</p>`;
}

function normalizeHour(time) {
  if (!time) return "";

  const [hour, minutes] = time.split(":");

  const amPm = parseInt(hour) + 1 > 12 ? "pm" : "am";
  const hourText = parseInt(hour) > 12 ? hour % 12 : hour;

  return `${parseInt(hourText)}:${minutes} ${amPm}`;
}
