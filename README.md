🦸‍♂️ KeyComicsDBCapstone

![.NET](https://img.shields.io/badge/.NET-ASP.NET_Core-purple)
![C#](https://img.shields.io/badge/C%23-Backend-blue)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![SQL](https://img.shields.io/badge/SQL-Database-green)

A full-stack web application built to help comic collectors track and manage key comic books in their collection.

Whether you're hunting first appearances, major story arcs, or investment-worthy issues — this app keeps everything organized in one place. 📖✨

🚀 Overview

KeyComicsDB is a comic book tracking platform that allows users to:

📚 Add key comic issues to a database

🔍 View and search comic entries

📝 Edit and update comic details

🗑️ Remove comics from the collection

🌐 Interact with a client-side frontend connected to a backend API

This project was built as a full-stack capstone to demonstrate backend architecture, frontend integration, and database management.

## 🏗️ Tech Stack 

### Backend
- C#
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Repository Pattern

### Frontend
- React (Create React App)
- JavaScript (ES6+)
- Component-Based Architecture
- REST API Consumption
- CSS

### 🛠️ Development Tools
- Git
- GitHub
- Visual Studio
- Node.js

🔹 Project Structure

Controllers/ – API endpoints

Models/ – Data models

Repositories/ – Data access layer

Utils/ – Utility/helper logic

client/ – Frontend application

Startup.cs – App configuration

Program.cs – Entry point

📊 Features

Full CRUD functionality (Create, Read, Update, Delete)

Repository pattern implementation

Separation of concerns (Controller → Repository → Database)

Client-server communication via REST API

Clean project organization

🛠️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/bgizzle78/KeyComicsDBCapstone.git
cd KeyComicsDBCapstone
2️⃣ Set Up the Database

Update your appsettings.json connection string

Run migrations (if applicable)

Ensure your SQL Server is running

3️⃣ Run the Backend

Open in Visual Studio and run:

dotnet run
4️⃣ Run the Frontend

Navigate to the client folder and start the frontend according to how it was configured (likely via a dev server or static hosting).

🧠 What This Project Demonstrates

Understanding of RESTful API design

Experience with layered architecture

Database integration with EF Core

Client/server data flow

Version control with Git

Full-stack development workflow

📌 Future Improvements

🔐 User authentication & accounts

📈 Comic value tracking

🖼️ Cover image uploads

☁️ Cloud deployment (Azure / AWS)

📱 Responsive UI enhancements

👨‍💻 Author

Brandon Gray
Full Stack Developer

🎯 Project Purpose

This project was created as a full-stack capstone to demonstrate the ability to design, build, and connect a complete web application from backend database to frontend user interface.