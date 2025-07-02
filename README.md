# 🔥 FlameDesk – Full-Stack Productivity & Challenge Manager

**FlameDesk** is a powerful and sleek productivity web application designed to streamline your daily workflow and keep you motivated. Built with the **MERN stack**, it offers task management, goal tracking through challenges, and a personalized experience wrapped in a stunning glassmorphism UI.

---

## 🔧 Tech Stack

- **MongoDB**
- **Express.js**
- **React.js**
- **Node.js**
- **Tailwind CSS**
- **JWT Authentication**
- **Mongoose**
- **Render Deployment**

---

## 📚 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [✨ Features](#-features)
- [🖼️ UI & Experience](#-ui--experience)
- [📦 Prerequisites](#prerequisites)
- [🚀 Installation](#installation)
- [🤝 Contributing](#contributing)
- [📝 License](#license)

---

## 🧭 Overview

**FlameDesk** is more than just a task manager or schedular — it’s a complete performance-boosting platform. From basic task management to dynamic challenge creation and real-time progress tracking, FlameDesk empowers users to take control of their goals with clarity and consistency.

<img src="/PreviewImages/ProjectPreview-1.PNG" alt="FlickQuery Preview">
<img src="/PreviewImages/ProjectPreview-2.PNG" alt="FlickQuery Preview">
<img src="/PreviewImages/ProjectPreview-3.PNG" alt="FlickQuery Preview">
</p>

---

---

## 🌐 Live Demo

Explore the live app here:  
🔗 FlameDesk Live Website : [FlameDesk Live](https://taskflow-9vb3.onrender.com)  
📦 GitHub Repository: [FlameDesk GitHub](https://github.com/nickyogi/FlameDesk)

---

## ✨ Features

### ✅ Core Task Management

- ➕ Create, 📝 Update, ❌ Delete tasks
- ✅ Mark tasks as completed
- 🗂️ Separate views for **Pending** and **Completed** tasks
- 🗓️ Filter tasks by **Date** and **Priority**

### 🆕 Challenge System

- 🔧 Create & customize **challenge templates**
- 🏁 Start or **quit challenges**
- 🖼️ Upload custom images for each challenge
- 📊 Track progress with helpful **challenge statistics**

### 👤 Profile Management

- Edit and update your **user profile**

### 🔐 Authentication & Authorization

- Secure **login/register**
- Centralized user data and task isolation

---

## 🖼️ UI & Experience

- 🎨 **Glassmorphism-inspired Design** – Elegant and modern interface
- 📱 **Responsive Layout** – Fully optimized for all screen sizes
- 🌀 **Smooth Animations** – Seamless transitions and micro-interactions
- ⚡ **Performance Optimizations** – Fast and efficient user experience

---

## 📦 Prerequisites

- Node.js (v16+)
- MongoDB instance (local or cloud-based like MongoDB Atlas)
- npm

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/nickyogi/Taskflow.git
cd Taskflow
```

Install server & client dependencies:

```bash
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```

Set up environment variables:

- Create a `.env` file in `/server`:
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```

Start the development server:

```bash
# In /server
npm run dev

# In /client (separate terminal)
npm start
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, submit issues, or open pull requests for new features, improvements, or bug fixes.

---

## 📝 License

This project is licensed under the **MIT License**.
