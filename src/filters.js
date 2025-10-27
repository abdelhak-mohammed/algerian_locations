import { wilayas } from "./data/wilayas.js";
import { dairas } from "./data/dairas.js";
import { communes } from "./data/communes.js";

export function getWilayas() {
    return wilayas;
}

export function getDairasByWilayaId(wilayaId) {
    return dairas.filter(d => d.wilaya_id === wilayaId);
}

export function getCommunesByWilayaId(wilayaId) {
    let selectedDairas = getDairasByWilayaId(wilayaId);


    return communes.filter(dc =>
        selectedDairas.some(d => d.id === dc.daira_id)
    );
}

export function getCommunesByDairaId(dairaId) {
    return communes.filter(c => c.daira_id === dairaId);
}