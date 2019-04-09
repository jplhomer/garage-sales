import { db } from "../src/db";

export async function getGarageSales() {
  const snapshot = await db.collection("sales").get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return [
    {
      id: 1,
      address: "2145 SE Parkview Crossing Dr",
      description: "A fundraiser for the Waukee Lions Club. Baked goods available!",
      start: "07:00",
      end: "15:00",
      lat: 41.593319,
      lng: -93.857797
    }
  ];
}

export async function addGarageSale(sale) {
  return await db.collection("sales").add(sale);
}
