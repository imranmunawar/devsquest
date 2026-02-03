# Email Server Setup

This server handles email sending via Gmail SMTP for the contact form and quotation form.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Gmail SMTP**

   To use Gmail SMTP, you need to:
   - Enable 2-Step Verification on your Google Account
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Create a `.env` file in the root directory with the following:

   ```env
   GMAIL_USER=devsquesthub@gmail.com
   GMAIL_APP_PASSWORD=your-app-password-here
   PORT=3001
   ```

3. **Run the Server**

   Development (server only):
   ```bash
   npm run dev:server
   ```

   Development (frontend + server):
   ```bash
   npm run dev:all
   ```

## API Endpoints

### POST /api/contact
Sends contact form submission to devsquesthub@gmail.com

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Hello, I'm interested in your services."
}
```

### POST /api/quotation
Sends quotation request to devsquesthub@gmail.com

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+1234567890",
  "service": "Web Application Development",
  "budget": "$10,000 - $25,000",
  "timeline": "3-6 months",
  "description": "Project description here"
}
```

### GET /api/health
Health check endpoint

## Notes

- The server runs on port 3001 by default
- In development, Vite proxies `/api` requests to the backend server
- Make sure to keep your `.env` file secure and never commit it to version control
