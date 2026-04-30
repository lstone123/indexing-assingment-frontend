# Product Search Frontend (Algolia InstantSearch Demo)

This is a frontend search experience built using Algolia InstantSearch. It connects to an Algolia index populated with product data and provides a fast, filterable search UI.

---

## 🚀 Features

- Instant search-as-you-type experience
- Product result listing with:
  - Thumbnail image
  - Product title
  - Price
- Faceted filtering:
  - Brand
  - Categories (hierarchical)

---

## 🧱 Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Algolia InstantSearch.js

---

## 🔗 Live Demo

https://lstone123.github.io/indexing-assingment-frontend/

---

## ⚙️ Setup Instructions

### 🔐 Algolia Configuration

The frontend connects to an Algolia index using:

Application ID
Search-only API key
Index name

These are defined in app.js:

```javascript
const searchClient = algoliasearch(
  "YOUR_APP_ID",
  "YOUR_SEARCH_API_KEY"
);
```

⚠️ Only the search-only API key is exposed in the frontend. The admin key is never used here.

### 📦 Index Requirements

This UI expects the Algolia index to contain:

- name
- image
- price
- brand
- hierarchichal categories

### 🧠 Notes on Implementation
- Uses InstantSearch widgets for modular UI components
- Hierarchical categories enable structured filtering
- Custom templates used for product cards


### 🚧 Possible Improvements
- Add sorting (price asc/desc, popularity)
- Improve mobile design and responsive layouts
- Improve mobile filter UX (drawer-style filters)
- Add product click-through routing

### ⏱ Time Spent

Approximately 2.5 hours
