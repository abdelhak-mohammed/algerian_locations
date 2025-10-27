import { wilayas, dairas, communes } from "./index.js";
import { normalize } from "./utils.js";

export function searchWilayaByName(query) {
    if (!query || typeof query !== "string") return [];

    const q = normalize(query);

    return wilayas.filter(w =>
        normalize(w.name).includes(q) ||
        normalize(w.name_ar).includes(q)
    );
}

export function searchDairaNames(query) {
    if (!query || typeof query !== "string") return [];

    const q = normalize(query);

    return dairas.filter(d =>
        normalize(d.name).includes(q) ||
        normalize(d.name_ar).includes(q)
    );
}

export function searchCommuneNames(query) {
    if (!query || typeof query !== "string") return [];

    const q = normalize(query);

    return communes.filter(c =>
        normalize(c.name).includes(q) ||
        normalize(c.name_ar).includes(q)
    );
}


export function getCommuneByCode(code) {
  if (code === null || code === undefined) return null;

  const codeStr = String(code).trim();

  return communes.find(c => c.code === codeStr) || null;
}




