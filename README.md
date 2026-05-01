# 🔐 Authentication Boilerplate (Node.js + Express + MongoDB)

A secure authentication boilerplate built with modern backend best practices. It includes complete user authentication flow: Signup, Login, OTP Verification, Forgot Password, Reset Password, and Update Profile. Uses JWT for protected routes, bcrypt for password hashing, and Nodemailer for sending OTP emails.

---

# 📦 Features

* User Signup with OTP verification
* User Login with JWT token
* Email OTP verification
* Forgot Password (OTP via email)
* Reset Password
* Update User Profile (Protected)
* Password hashing using bcrypt
* JWT Authentication middleware
* Clean API structure
* Error handling middleware
* Scalable folder architecture

---

# 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (jsonwebtoken)
* bcrypt
* Nodemailer
* UUID (OTP generation)
* dotenv
* cors
* morgan

---

# 📁 Project Structure

```
.
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── authController.js
│   ├── middleware
│   │   └── errorMiddleware.js
│   ├── models
│   │   └── userSchema.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── services
│   │   └── sendEmail.js
│   ├── responseHandler
│   │   └── successHandler.js
│   └── app.js
│
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone <your-repo-url>
```

Go into project directory

```bash
cd project-folder
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in root and add:

```
PORT=8500

MONGO_URI=your_mongodb_connection_string

JWT_SECRET_KEY=your_jwt_secret

PORTAL_EMAIL=your_email@gmail.com
PORTAL_PASSWORD=your_email_app_password
```

### Environment Variables Explanation

| Variable        | Description               |
| --------------- | ------------------------- |
| PORT            | Server running port       |
| MONGO_URI       | MongoDB connection string |
| JWT_SECRET_KEY  | JWT token secret key      |
| PORTAL_EMAIL    | Email used to send OTP    |
| PORTAL_PASSWORD | App password for email    |

⚠️ Use Gmail App Password (not your real password)

---

# ▶️ Running the Project

Development mode:

```bash
npm run start:dev
```

Production mode:

```bash
npm start
```

Server will run on:

```
http://localhost:8500
```

---

# 🔐 Authentication APIs

Base URL:

```
/api/auth
```

---

## 🧾 Signup

POST `/api/auth/signup`

Body:

```json
{
  "userName": "Hasan",
  "email": "user@gmail.com",
  "password": "123456",
  "age": 22
}
```

Response:

* User created
* OTP sent to email

---

## 🔑 Login

POST `/api/auth/login`

Body:

```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

Response:

* JWT Token
* User Data

---

## ✅ Verify OTP

POST `/api/auth/verify-otp`

Body:

```json
{
  "email": "user@gmail.com",
  "otp": "1234"
}
```

---

## 🔁 Forgot Password

POST `/api/auth/forget-password`

Body:

```json
{
  "email": "user@gmail.com"
}
```

OTP will be sent to email.

---

## 🔒 Reset Password

POST `/api/auth/reset-password`

Body:

```json
{
  "email": "user@gmail.com",
  "otp": "1234",
  "password": "newPassword"
}
```

---

# 👤 User Routes (Protected)

Base URL:

```
/api/user
```

Headers:

```
Authorization: Bearer YOUR_TOKEN
```

---

# 🔐 JWT Token

Token is returned on login:

```
Authorization: Bearer token
```

Use this token to access protected routes.

---

# 🔒 Security Features

* Password hashed using bcrypt
* JWT Authentication
* OTP expiry (10 minutes)
* Email verification
* Protected routes middleware
* Error handling middleware

---

# 🚀 Ready for Production

This boilerplate is ready to use in:

* SaaS apps
* Admin dashboards
* Mobile app backend
* MERN projects
* Startup projects

---

# 👨‍💻 Author

Muhammad Hasan Ashraf
