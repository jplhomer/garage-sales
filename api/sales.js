import { db } from "../src/db";

export async function getGarageSales() {
  const snapshot = await db.collection("sales").get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    htmlDescription: getHtmlDescription(doc.data()),
    ...doc.data()
  }));
}

function getHtmlDescription(data) {
  return `<b>${data.address}</b><br>
      Hours: ${data.startTime} - ${data.endTime}<br>
      <p>${data.description}</p>`;
}

export async function addGarageSale(sale) {
  return await db.collection("sales").add(sale);
}
