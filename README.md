# 💳 Credit Card Statement PDF Parser

A full stack project to intelligently extract summary fields and transaction data from diverse real-world credit card statement PDFs—using Node.js/Express backend, Vite+React frontend, MongoDB, and styled with TailwindCSS.

---

## 🚀 Live Project Links

- **Frontend:** [View Live](https://creditcard-parser.vercel.app/)
- **Backend API:** [Explore API](https://creditcardparserbackend.onrender.com)

---

## 🖼️ Screenshots

### Homepage

<img width="1919" height="801" alt="image" src="https://github.com/user-attachments/assets/ce05bb58-80e2-4a71-9636-645441dfada5" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bdec95c4-2079-47a4-9005-5e8c481e6057" />



### About Page

<img width="1919" height="798" alt="image" src="https://github.com/user-attachments/assets/f2e9061d-50d2-4e25-9f03-df8285900f44" />



---

## Features

- **Multi-bank PDF Statement parsing (Kotak, HDFC, SBI, Axis, ICICI...)**
- **Automatic extraction of Issuer, Card Info, Billing Cycle, Payment Due, Total**
- **Clean transactions table with multi-row/multi-line support**
- **Modern responsive design, stylized file picker and animated buttons**

---

## Technologies

- **Backend:** Node.js, Express, pdf-parse, MongoDB Atlas
- **Frontend:** Vite, React, TailwindCSS, Axios

---

## Local Setup

**Backend:**
- cd backend
- npm install
- cp .env.example .env # Set MONGO_URI to your DB
- npm run start

  
**Frontend:**
- cd frontend
- npm install
- echo VITE_API_BASE_URL=http://localhost:5000 > .env
- npm run dev

  ---

## API

Upload PDFs via `/api/statements/upload`  
Extracted fields and transaction data in JSON.

---

## Credits

Made for Sure as an assignment as a part recruitment process, October 2025

---
