# Email Sender Application

The Email Sender Application is a server-side application built with [Express.js](https://expressjs.com/) that provides an endpoint to send emails to specified users.

## Features

- Send emails to specified users
- Customizable email content and subject
- Error handling for failed email sending
- Simple and easy-to-use API endpoint

## Prerequisites

Before running the application, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) package manager

## Getting Started

1. Clone this repository to your local machine or download the source code.

2. Install the dependencies using npm .

3. Set up the environment variables.

   - Create a `.env` file in the project root directory.
   - Add the following environment variables with their corresponding values:

   ```plaintext
   USER_EMAIL='your email id'
   CLIENT_ID='google api clientid'
   CLIENT_SECRET='google client secret'
   REFRESH_TOKEN='google refresh token'
   ACCESS_TOKEN='google access token'
   ```

4. The application will start running on `http://localhost:3000`.

## API Endpoint

### Send Email

Send an email to a specified user.

- **URL**: `/send-email`
- **Method**: POST
- **Content Type**: application/json

#### Request Body

| Parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| `to`      | string | Yes      | Email address of the recipient |
| `subject` | string | Yes      | Subject of the email           |
| `text`    | string | Yes      | Email content or message       |

#### Response

- **Status**: 200 OK
- **Content Type**: application/json

```json
{
  "status": "success",
  "message": "Email sent"
}
```

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "to": "recipient@example.com",
  "subject": "Greetings",
  "text": "Hello, World!"
}' http://localhost:3000/send-email
```

#### Error Handling

- In case of any errors, the application will respond with an appropriate error message and status code.

```json
{
  "status": "failed",
  "message": "Error description"
}
```

- **Status**: 500
- **Content Type**: application/json
