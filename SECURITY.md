# Security Policy

## Supported Versions

We actively maintain and update this project. Please use the latest version to ensure the best security practices.

| Version | Supported          |
|---------|------------------|
| Latest  | ✅ Yes          |
| Older   | ❌ No           |

## Security Measures

This project follows best practices for API security, including:

- **Helmet.js**: Used to set security-related HTTP headers.
- **MongoDB**: Secure database configuration recommended (e.g., avoid publicly accessible instances).
- **GraphQL & WebSockets**: Implemented with security considerations but still under review for potential risks.
- **Automated Security Testing**: Regular scans using OWASP ZAP, Aikido Security, and ESLint.

### **Current Limitations**
- ❌ **No User Accounts**: Authentication and authorization are not currently implemented.
- ❌ **No RBAC (Role-Based Access Control)**: There is no role-based access control at this time.
- ❌ **Do Not Enter Sensitive Information**: The application does not support confidential or personally identifiable data.

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly. You can reach us at:

📧 **Email:** [hensley.brenda@protonmail.com](mailto:hensley.brenda@protonmail.com)  

We appreciate responsible disclosure and will work to address any valid security concerns as quickly as possible.

## Security Testing & Analysis

Security assessments are regularly conducted to identify and mitigate vulnerabilities. Key areas of testing include:

1️⃣ **API & Web Application Testing**  
   - Reviewing API endpoints for security risks.  
   - Validating input handling to detect injection attacks.  
   - Confirming API responses do not expose sensitive information.  

2️⃣ **Input Validation & Sanitization**  
   - Checking for potential injection vulnerabilities.  
   - Ensuring input fields are properly sanitized.  
   - Testing for cross-site scripting (XSS) risks.  

3️⃣ **Automated Security Scanning**  
   - OWASP ZAP for web application security testing.  
   - Aikido Security for dependency vulnerability analysis.  
   - ESLint for static code analysis.  

4️⃣ **Logging & Error Handling**  
   - Ensuring error messages do not leak system details.  
   - Verifying logs do not store sensitive data in plaintext.  

## Future Security Enhancements

We plan to improve security over time and may introduce:

- Authentication and authorization mechanisms.
- Role-Based Access Control (RBAC).
- API rate limiting and logging improvements.
- Additional security hardening measures.

## Contributing

We welcome contributions! If you have security improvements or recommendations, feel free to submit a pull request.

---

🔐 **Maintained by:** Brenda Hensley  
📧 **Contact:** [hensley.brenda@protonmail.com](mailto:hensley.brenda@protonmail.com)  

Thank you for helping us keep this project secure!
