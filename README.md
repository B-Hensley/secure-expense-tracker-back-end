# 🔒 Secure Expense Tracker Back-End  

A secure backend built with **Node.js, Express, MongoDB, GraphQL, WebSockets, and Apollo Server** for real-time data synchronization. This backend powers the Secure Expense Tracker's **responsive front-end** by handling API requests and WebSocket connections.  

---

## ⚠️ **IMPORTANT NOTICE**  
🚨 **At the time of writing, this application does not support user accounts.**  
🚨 **Please DO NOT enter sensitive information.**  

---

## 📁 Folder Structure  
```plaintext
secure-expense-tracker-backend/
├── Procfile                # Configuration for Heroku deployment
├── server.js               # Main server file handling API and WebSockets
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Lock file for npm dependencies
├── README.md               # Documentation (this file)

```
## 🛠️ Tools Used
- **Framework**: Node.js, Express
- **Database**: MongoDB
- **API & Real-time Communication**: GraphQL, WebSockets, Apollo Server
- **Deployment**: Heroku

## ▶️ Getting Started
Follow these steps to set up the project locally:

#### 1️⃣ **Clone the repository**:
   ```bash
   git clone https://github.com/G-Hensley/secure-expense-tracker-back-end.git
   ```
#### 2️⃣ Navigate into the folder:
   ```bash
   cd secure-expense-tracker-back-end
   ```
#### 3️⃣ Install dependencies:
   ```bash
   npm install
   ```
#### 4️⃣ Run development server:
   ```bash
   npm run dev
   ```
#### 5️⃣ Once running, the backend will be available at:
📌 GraphQL API: http://localhost:4000/graphql
📌 WebSocket Server: ws://localhost:4000/graphql


---


## ☁️ Deployment  

The backend is **deployed on Heroku**. To deploy your own version:  

### 1️⃣ Push your code to a GitHub repository  
Ensure your backend is stored in a public or private **GitHub repository**.  

### 2️⃣ Connect your repository to Heroku  
Use the **Heroku dashboard** or **CLI** to connect the repository.  

### 3️⃣ Configure environment variables  
Set up necessary **environment variables** such as:  

```plaintext
MONGODB_URI=<your_mongodb_connection_string>
PORT=4000
```
### 4️⃣ Deploy using Heroku
Deploy manually via the Heroku dashboard or enable automatic GitHub deployments.

🔹 The front-end is deployed separately on Vercel.  
Refer to the front-end repository for deployment instructions.

---


## 🔐 Security Analysis

My name is **Brenda Hensley**, and I am a recent graduate of Western Governors University’s Bachelor of Science in Cybersecurity and Information Assurance program. I hold multiple industry certifications, including CompTIA Security+, CySA+, and PenTest+, among others.

I have been actively enhancing my hands-on skills to expand my expertise and gain practical experience in various security domains. For this project, my husband, Gavin Hensley, developed a web application, and I conducted security testing to identify vulnerabilities and verify implemented solutions. This document provides an overview of my initial security testing process and some of the thought processes behind my approach.

### 🛡️ My Role  
- **Security & Vulnerability Testing** – Conducted security assessments to identify and analyze potential risks in the web application and API.  
- **Solution Implementation Verification** – Verified the effectiveness of implemented security fixes by re-testing vulnerabilities and ensuring proper mitigation.  
- **Automated Security Scanning** – Used tools like **OWASP ZAP, Aikido Security, and ESLint** to identify and document security flaws.  
- **Threat Analysis & Reporting** – Evaluated risks associated with detected vulnerabilities and documented findings with remediation recommendations.  
- **Secure Development Recommendations** – Provided feedback on secure coding practices to prevent recurring vulnerabilities.  

## My Process

### 1️⃣ API & Web Application Testing  
- Reviewed **API endpoints** to identify potential security risks.  
- Validated **input handling** to detect possible injection attacks.  
- Ran **automated scans** to identify vulnerabilities in the web application.  
- Confirmed **API responses** do not expose sensitive information.  

### 2️⃣ Input Validation & Sanitization  
- Checked for **SQL injection risks** by testing database queries.  
- Reviewed **user input fields** to ensure proper sanitization.  
- Tested for potential **XSS vulnerabilities** in input fields and API responses.  

### 3️⃣ Automated Security Scanning  
- Used **OWASP ZAP** to scan for security flaws.  
- Identified and implemented **fixes** for detected vulnerabilities.  
- Confirmed that fixes were effective—**OWASP ZAP was unable to rerun the scan** after implementation.  

### 4️⃣ Code & Dependency Security Analysis  
- Used **ESLint** for static code analysis to detect potential issues.  
- Ran **Aikido Security** to identify vulnerabilities in dependencies.  
- Identified and implemented **fixes**.  
- Confirmed implemented solutions were successful by re-running scans and **verifying the absence of vulnerabilities**.  

### 5️⃣ Logging & Error Handling  
- Verified that **error messages** do not leak system details.  
- Checked that **logs do not store sensitive data** in plaintext.  

---

## 🛠️ Tools Used  
- **Postman** – API testing  
- **OWASP ZAP** – Web application security scanning  
- **ESLint** – Static code analysis  
- **Aikido Security** – Dependency vulnerability scanning  

### Keep an eye out for more updates!
---

Contributing

We welcome contributions! Feel free to fork the repository and submit pull requests to enhance the project.
License

This project is licensed under the MIT License.

Note: This repository contains the front-end code. The backend, built with Node, Express, MongoDB, GraphQL, WebSockets, and Apollo Server, is hosted on Heroku and resides in a separate repository: [https://github.com/G-Hensley/secure-expense-tracker-back-end].
