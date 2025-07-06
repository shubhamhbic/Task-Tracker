# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# 📝 Personal Task Tracker

A responsive React application that allows users to manage daily tasks — including adding, editing, completing, and deleting tasks — with data persistence using localStorage.

## 📸 Demo

> Coming soon — [Deploy this on Netlify or Vercel]

---

## 🚀 Features

- ✅ Simple Login
  - Enter username to access the app
  - Stored using `localStorage`
  - Logout button included

- ✅ Task Management
  - Add, edit, delete tasks
  - Mark tasks as completed or pending
  - Created time shown

- ✅ Task Filtering
  - View All, Completed, or Pending tasks
  - Task counts for each category

- ✅ Data Persistence
  - All data stored in `LocalStorage`
  - State maintained even after refresh

- ✅ Responsive UI
  - Custom styled login page
  - Clean, mobile-friendly interface

---

## 🛠️ Tech Stack

- [React.js](https://reactjs.org/)
- React Hooks (`useState`, `useEffect`)
- CSS (custom styling)
- `localStorage` (custom utility module)

---

## 📁 Folder Structure

```bash
src/
├── components/
│   ├── Login.js
│   ├── TaskForm.js
│   ├── TaskItem.js
│   ├── TaskList.js
│   └── TaskFilter.js
├── utils/
│   └── localStorage.js
├── styles/
│   └── App.css
├── App.js
└── index.js
