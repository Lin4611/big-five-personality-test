# 🧠 五大人格特質心理測驗 | Big Five Test

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

使用 **React** 製作的五大人格特質（Big Five）心理測驗網站。  
使用者完成測驗後，系統會根據作答結果，計算並呈現五大人格向度的特質分析。

本專案著重於 **資料流設計、元件拆分與可維護的前端架構**。

🎨 設計稿來源：[Adobe XD Design Link](https://xd.adobe.com/view/ccc4dd9e-4b8f-4491-4754-4049282e0d7a-baf5/grid/)

## 🧩 網頁介紹 | Overview

本網站為一個五大人格特質（Big Five）心理測驗應用。

使用者將依序完成測驗題目，系統會根據作答結果計算各人格向度的分數，並於結果頁中呈現每一項特質的分析（高 / 中 / 低）。

---

## 📂 專案架構 | Project Structure

```text
src/
├─ pages/        # landing / question / result
├─ components/   # 共用 UI（Meta, Loading, Error）
├─ hooks/        # useBigFiveData
├─ context/      # BigFive Context
├─ config/       # meta 設定
├─ router/       # Router 設定
├─ assets/       # 圖片資源
├─ styles/       # 全域樣式
├─ App.jsx
└─ main.jsx
```

---

## 🚀 啟動專案 | Quick Start
安裝環境 (Requirement)：請確認電腦已安裝 Node.js。

安裝與啟動 (Setup & Dev)：
```bash
npm install
npm run dev
```

---