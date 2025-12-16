# 🇩🇿 Algeria Locations

A lightweight JavaScript library that provides complete data for **Wilayas**, **Dairas**, and **Communes** of Algeria — with easy search and filtering utilities.

**Now fully updated to support the new 69 Wilayas administrative division alignment!** 🇩🇿✨

Perfect for form builders, location selectors, or projects that need structured Algerian administrative data.

---

## 🚀 Installation

```bash
npm install algeria-locations
```

or using Yarn:

```bash
yarn add algeria-locations
```

---

## 🧩 Usage

```js
import {
  wilayas,
  dairas,
  communes,
  getWilayaByCode,
  getDairaByCode,
  getCommuneByCode,
  searchWilayaNames,
  searchDairaNames,
  searchCommuneNames,
  filterCommunesByWilaya,
  filterDairasByWilaya
} from "algeria-locations";

// Example: get a wilaya by its code
const algiers = getWilayaByCode("16");
console.log(algiers.name); // "Alger"

// Example: find all communes of a wilaya
// Works with new wilayas too! (e.g. "59" for El Meniaa)
const algiersCommunes = filterCommunesByWilaya("16");

// Example: search wilayas by name
const matches = searchWilayaNames("Or");
```

---

## 📦 Exports

### Data Arrays

* `wilayas` → List of all **69 wilayas** (including the 10 newly created wilayas)
* `dairas` → List of all dairas with their `wilaya_id`
* `communes` → List of all communes with their `daira_id`

### Utility Functions

| Function                             | Description                                        |
| ------------------------------------ | -------------------------------------------------- |
| `getWilayaByCode(code)`              | Returns a wilaya object by its code                |
| `getDairaByCode(code)`               | Returns a daira object by its code                 |
| `getCommuneByCode(code)`             | Returns a commune object by its code               |
| `searchWilayaNames(query)`           | Search wilayas by name (FR/AR, accent-insensitive) |
| `searchDairaNames(query)`            | Search dairas by name                              |
| `searchCommuneNames(query)`          | Search communes by name                            |
| `filterCommunesByWilaya(wilayaCode)` | Get all communes of a wilaya                       |
| `filterDairasByWilaya(wilayaCode)`   | Get all dairas of a wilaya                         |

---

## 🌟 New Feature: 69 Wilayas Alignment

This library has been updated to align with the latest Algerian administrative division (Loi n° 19-12), bringing the total to **69 Wilayas**.

It includes the 10 new wilayas promoted from delegated wilayas:
`Timimoun`, `Bordj Badji Mokhtar`, `Ouled Djellal`, `Béni Abbès`, `In Salah`, `In Guezzam`, `Touggourt`, `Djanet`, `El M'Ghair`, and `El Meniaa`.

All data associations (Dairas and Communes) have been realigned to their correct new parent Wilayas.

---

## 🗂️ Data Structure Example

```json
[
  { id: 1, code: "1", name: "Adrar", name_ar: "أدرار" },
```

---

## 🧠 Notes

* All codes are stored as **strings** (e.g. `"01031"`, not `1031`).
* Search is **accent- and case-insensitive**, and supports both **French** and **Arabic**.
* No external dependencies — pure JavaScript.

---

## 🛠️ Build

If you want to build the library locally:

```bash
npm run build
```

*(Requires [Vite](https://vitejs.dev/) which is already included in `devDependencies`.)*

---

## 📜 License

MIT © 2025 Mohammed Abdelhak

---

## 💡 Contributing

Pull requests are welcome!
If you spot an issue or have an idea for improvement, open an issue on GitHub.

Bsahtek ya mowaطin , Build something Great !
