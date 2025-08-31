# Atom Tech Frontend

This is a React-based frontend application for managing data. The app allows viewing data created by user and creating new data entries, with a clean and responsive UI.

## 🚀 Features

- View a list of users
- Create new user entries
- Client-side routing using `react-router-dom`
- Clean layout with conditional rendering
- API integration via a `userService`

---

## 🔗 Project URL

GitHub Repository: [https://github.com/eagle-s-learner/atom_tech_frontend](https://github.com/eagle-s-learner/atom_tech_frontend)

---

## 📁 Folder Structure

atom_tech_frontend/
│
├── public/ # Static files
├── src/
│ ├── components/ # Reusable UI components (e.g., Loading, UserTable)
│ ├── pages/ # Page-level components (UsersPage, CreateUserPage)
│ ├── services/ # API services (userService.js)
│ ├── App.js # Main app component with routing
│ └── index.js # React entry point
│
├── package.json # Project metadata and dependencies
├── tailwind.config.js # Tailwind CSS config (if used)
└── README.md # You're reading it!


---

## ✅ Before You Begin

Make sure the following are installed on your system:

1. **Node.js** – [Download Node.js](https://nodejs.org/)  
   > Download the **LTS version** (recommended for most users)

2. **VS Code** (optional but recommended) – [Download VS Code](https://code.visualstudio.com/)

---

## 🚀 How to Set Up and Run This Project (Step-by-Step)

Follow these steps one by one:

```bash
# 1. Open a terminal

# 2. Clone the repository
git clone https://github.com/eagle-s-learner/atom_tech_frontend.git

# 3. Move into the project folder
cd atom_tech_frontend
# This command puts you inside the folder you just downloaded.

# 4. (Optional) Open the project in VS Code
code .
# If this command doesn’t work, make sure the `code` command is enabled in your system PATH.

# 5. Install all required dependencies
npm install
# ✅ Wait until it's fully done. This step may take a minute or two depending on your internet speed.

# 6. Start the development server
npm run dev
# This will open the app in your browser