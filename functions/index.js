const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const { defineSecret } = require('firebase-functions/params');
const waToken = defineSecret('WA_TOKEN');

admin.initializeApp(); // Initializes Firebase Admin SDK

exports.onNewDocumentAdded = onDocumentCreated("services/{documentId}",
  { secrets: [waToken] },
    (event) => {
      const snapshot = event.data; // The newly created document's snapshot
      if (!snapshot) {
        console.log("No data associated with the event.");
        return;
      }

      const newData = snapshot.data(); // Access the data of the new document
      const documentId = snapshot.id; // Access the ID of the new document

      console.log(`New document created: ${documentId}`);
      console.log("New document data:", newData);


      return fetch(process.env.WA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${waToken.value()}`,
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: `52${newData.phoneNumber}`,
          type: "template",
          template: {
            name: "love_paws_service_utility",
            language: {code: "es_MX"},
          },
        }),
      })
          .then((res) => res.ok ?  res.text().then((text) => {
            console.log("Message sent successfully:", text);
          }) : res.text().then((text) => {
            throw new Error(`HTTP ${res.status}: ${text}`);
          }));
    });
