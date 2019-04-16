import { functions, db } from "../src/firebase";

export async function getGarageSales() {
  const snapshot = await db.collection("sales").get();

  return snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
}

export const addGarageSale = functions.httpsCallable("addGarageSale");
