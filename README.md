
# CMS Backend API

This is the backend API for the CMS platform built with **Express.js**, **TypeScript**, and **MongoDB**. It provides several endpoints for managing users, posts, comments, categories, and subscribers.

## 🚀 Features

- **User Management**: Register, login, and manage user details.
- **Post Management**: Create, read, update, and delete posts.
- **Comment Management**: Add, view, and delete comments on posts.
- **Category Management**: Manage categories for posts.
- **Subscriber Management**: Subscribe, view, and unsubscribe users.

## 🛠️ Technologies Used

- **Node.js** & **Express.js** for server-side functionality.
- **TypeScript** for strong typing and enhanced development experience.
- **MongoDB** for the database.
- **AWS S3** for image storage (optional, configured in `.env`).
- **Nodemon** for live server reloading during development.

## ⚙️ Setup & Installation

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/raphael-devasia/cms-backend.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd cms-backend
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=your-aws-region
S3_BUCKET_NAME=your-s3-bucket-name
MONGO_URI=mongodb://localhost:27017/cms
```

Replace `your-aws-access-key`, `your-aws-secret-key`, and other variables with your actual credentials.

### 4. Start the Application

To start the development server, run:

```bash
npm run dev
```

For production, after building the project, use:

```bash
npm start
```

### 5. Build Project

To compile the TypeScript files into JavaScript for production, run:

```bash
npm run build
```

## 📂 Folder Structure

```bash
cms-backend/
│
├── src/
│   ├── controllers/             # All controller logic
│   ├── db/                     # MongoDB connection and schema files
│   ├── infrastructure/         # Routes and middleware
│   ├── models/                 # MongoDB models
│   ├── routes/                 # API route handlers
│   └── server.ts               # Main entry file for the app
│
├── dist/                       # Compiled JavaScript files (output of build)
├── node_modules/               # Project dependencies
├── .env                        # Environment variables
├── package.json                # Project metadata and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 📑 API Endpoints

### User Routes

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login a user.
- `GET /api/users/`: Get all users.
- `GET /api/users/:id`: Get user by ID.
- `PUT /api/users/:id`: Update user by ID.
- `DELETE /api/users/:id`: Delete user by ID.

### Post Routes

- `POST /api/posts`: Create a new post.
- `GET /api/posts/all/:id`: Get all posts by ID.
- `GET /api/posts/:id`: Get post by ID.
- `PUT /api/posts/:id`: Update post by ID.
- `DELETE /api/posts/:id`: Delete post by ID.
- `POST /api/posts/upload`: Upload image for post.
- `GET /api/posts/get-url`: Get a presigned URL for AWS S3 file upload.

### Comment Routes

- `POST /api/comments/:postId`: Create a new comment on a post.
- `GET /api/comments/:postId`: Get all comments on a post.
- `DELETE /api/comments/:id`: Delete a comment by ID.

### Category Routes

- `POST /api/categories`: Create a new category.
- `GET /api/categories/all/:id`: Get all categories by ID.
- `GET /api/categories/:id`: Get category by ID.
- `PUT /api/categories/:id`: Update category by ID.
- `DELETE /api/categories/:id`: Delete category by ID.

### Subscriber Routes

- `POST /api/subscribers`: Subscribe to the platform.
- `GET /api/subscribers/:id`: Get subscriber details by ID.
- `DELETE /api/subscribers/:id`: Unsubscribe.
- `GET /api/subscribers/`: Get all subscribers.

## 🔒 Authentication

All routes require authentication except for the **register** and **login** endpoints. You can use JWT (JSON Web Tokens) for authenticating API requests. Pass the token in the `Authorization` header as a Bearer token.

Example:

```bash
Authorization: Bearer <your-token>
```

## 🧑‍💻 Contributing

We welcome contributions to the CMS Backend project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch to your fork.
5. Submit a pull request.




