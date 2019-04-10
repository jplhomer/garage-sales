import { functions } from "../src/firebase";

export async function getGarageSales() {
  const { data } = await functions.httpsCallable("getGarageSales")();
  return data;
}

export const addGarageSale = functions.httpsCallable("addGarageSale");
