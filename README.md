# 🦸 KeyComicsDB

### Full-Stack Comic Collection Management Application

![.NET](https://img.shields.io/badge/.NET-ASP.NET_Core-purple)
![C#](https://img.shields.io/badge/C%23-Backend-blue)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![SQL](https://img.shields.io/badge/SQL-Database-green)

---

## 📌 Project Overview

**KeyComicsDB** is a full-stack web application designed to help collectors track and manage key comic book issues.

This project was built using a **React frontend** and an **ASP.NET Core Web API backend**, connected to a SQL database through **Entity Framework Core**.

It demonstrates modern client-server architecture, clean separation of concerns, and full CRUD functionality.

---

## 🏗️ Architecture

This application follows a layered architecture:

```
React Client (Frontend)
        ↓
ASP.NET Core Controllers (API Layer)
        ↓
Repository Layer (Data Access)
        ↓
Entity Framework Core
        ↓
SQL Server Database
```

---

## 🔹 Frontend

* Built with **React (Create React App)**
* Component-based architecture
* API calls to backend using HTTP requests
* Dynamic rendering of comic data
* Structured UI using reusable components

---

## 🔹 Backend

* ASP.NET Core Web API
* RESTful endpoints
* Repository pattern implementation
* Entity Framework Core for data access
* SQL Server database integration

---

## 🚀 Core Features

* 📚 Create new key comic entries
* 🔎 Retrieve and display comic records
* ✏️ Update comic details
* 🗑️ Delete comics from the collection
* 🌐 RESTful API communication between client and server

---

## 📂 Project Structure

### Backend

* `Controllers/` – API endpoints handling HTTP requests
* `Models/` – Domain models representing comic data
* `Repositories/` – Data access layer abstraction
* `Utils/` – Helper utilities
* `Startup.cs` – Application configuration
* `Program.cs` – Application entry point

### Frontend (`client/`)

* `src/` – React components and application logic
* `public/` – Static assets
* `package.json` – Node dependencies and scripts

---

## 🛠️ Tech Stack

### Backend

* C#
* ASP.NET Core Web API
* Entity Framework Core
* SQL Server
* Repository Pattern

### Frontend

* React
* JavaScript (ES6+)
* Component-Based Architecture
* CSS

### Tools

* Git
* GitHub
* Visual Studio 2022
* Node.js

---

## ⚙️ Running the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/bgizzle78/KeyComicsDBCapstone.git
cd KeyComicsDBCapstone
```

### 2️⃣ Configure Database

Update the `appsettings.json` file with your SQL Server connection string.

### 3️⃣ Run Backend

```bash
dotnet run
```

### 4️⃣ Run Frontend

```bash
cd client
npm install
npm start
```

---

## 🎯 What This Project Demonstrates

* RESTful API design
* Full CRUD operations
* Repository pattern usage
* Clean separation of concerns
* React frontend consuming a .NET backend
* Structured full-stack application development

---

## 🔮 Future Enhancements

* 🔐 Authentication & authorization
* 📊 Comic value analytics
* ☁️ Cloud deployment (Azure / AWS)
* 📱 Responsive UI improvements

---

## 👨‍💻 Author

**Brandon Gray**
Full Stack Developer/Data Analyst
