# Contact Management Application Backend

This is a Node.js and Express.js backend application designed for managing contacts. It supports CRUD operations (Create, Read, Update, Delete) on contacts, along with additional features like searching and data validation.

---

## Features

1. **CRUD Operations**:
   - Create a new contact.
   - Fetch all contacts or a single contact by ID.
   - Update an existing contact.
   - Delete a contact.

2. **Search Contacts**:
   - Search contacts by name or email.

3. **Data Validation**:
   - Validate required fields (name, email, phone number) using `express-validator`.

4. **Error Handling**:
   - Proper error messages for invalid requests (e.g., missing fields, contact not found).

5. **MongoDB Integration**:
   - Store contacts in a MongoDB database.

---

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing contacts.
- **Mongoose**: MongoDB object modeling for Node.js.
- **express-validator**: Middleware for request validation.
- **Git**: Version control.

---

## Deployment:
The application is deployed on Render (Web Service) and can be accessed [here](https://contact-management-app-23y7.onrender.com/contacts/).

---

## API Endpoints

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| GET    | `/contacts`         | Fetch all contacts.                  |
| GET    | `/contacts/:id`     | Fetch a single contact by ID.        |
| POST   | `/contacts`         | Create a new contact.                |
| PUT    | `/contacts/:id`     | Update an existing contact by ID.    |
| DELETE | `/contacts/:id`     | Delete a contact by ID.              |
| GET    | `/contacts/search`  | Search contacts by name or email.    |

---

## Setup Instructions

### Prerequisites

1. **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
2. **MongoDB**: Install MongoDB locally or use a cloud service like MongoDB Atlas.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contact-management-app.git
   cd contact-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Update the MongoDB connection string in `index.js`:
     ```javascript
     mongoose.connect('mongodb://localhost:27017/contactDB', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     ```
   - Replace `mongodb://localhost:27017/contactDB` with your MongoDB URI if using a remote database.

4. Start the server:
   ```bash
   npm start
   ```
   or for development with `nodemon`:
   ```bash
   npm run dev
   ```

5. The server will run on `http://localhost:3000`.

---

## API Documentation

### 1. Fetch All Contacts
- **Endpoint**: `GET /contacts`
- **Response**:
  ```json
  [
    {
      "_id": "64f1b2c3e4b0a1a2b3c4d5e6",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phoneNumber": "1234567890",
      "address": "123 Main St",
      "createdAt": "2023-09-01T12:34:56.789Z"
    }
  ]
  ```

### 2. Fetch a Single Contact
- **Endpoint**: `GET /contacts/:id`
- **Response**:
  ```json
  {
    "_id": "64f1b2c3e4b0a1a2b3c4d5e6",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phoneNumber": "1234567890",
    "address": "123 Main St",
    "createdAt": "2023-09-01T12:34:56.789Z"
  }
  ```

### 3. Create a New Contact
- **Endpoint**: `POST /contacts`
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "phoneNumber": "9876543210",
    "address": "456 Elm St"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64f1b2c3e4b0a1a2b3c4d5e7",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "phoneNumber": "9876543210",
    "address": "456 Elm St",
    "createdAt": "2023-09-01T12:34:56.789Z"
  }
  ```

### 4. Update a Contact
- **Endpoint**: `PUT /contacts/:id`
- **Request Body**:
  ```json
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phoneNumber": "9876543210",
    "address": "456 Elm St"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64f1b2c3e4b0a1a2b3c4d5e7",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phoneNumber": "9876543210",
    "address": "456 Elm St",
    "createdAt": "2023-09-01T12:34:56.789Z"
  }
  ```

### 5. Delete a Contact
- **Endpoint**: `DELETE /contacts/:id`
- **Response**:
  ```json
  {
    "message": "Contact deleted successfully"
  }
  ```

### 6. Search Contacts
- **Endpoint**: `GET /contacts/search?name=John&email=example.com`
- **Response**:
  ```json
  [
    {
      "_id": "64f1b2c3e4b0a1a2b3c4d5e6",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phoneNumber": "1234567890",
      "address": "123 Main St",
      "createdAt": "2023-09-01T12:34:56.789Z"
    }
  ]
  ```

---

## Error Handling

- **400 Bad Request**: Invalid input data (e.g., missing required fields).
- **404 Not Found**: Contact not found.
- **500 Internal Server Error**: Server-side errors.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://contact-management-app-23y7.onrender.com/contacts/) file for details.

---

## Contact

For questions or feedback, please reach out to [umarsyed082@gmail.com](umarsyed082@gmail.com).

---
