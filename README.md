# QuickAI

QuickAI is an AI-powered web application designed for content creators, bloggers, and professionals. It helps users generate articles, blog titles, images, and review resumes using advanced AI tools, streamlining creative and professional workflows.

## Features

- ✍️ AI-powered article writing
- 📝 Blog title generation
- 🖼️ Image creation and editing
- 📄 Resume review
- 👥 Community features

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+)
- npm

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/quickai.git
   ```

2. **Install dependencies for client and server:**
   ```
   cd client
   npm install

   cd ../server
   npm install
   ```

3. **Set up environment variables:**

#### Client `.env`

Create a `client/.env` file with the following content:
```
VITE_CLERK_PUBLISHABLE_KEY=
VITE_BASE_URL=http://127.0.0.1:3000
```

#### Server `.env`

Create a `server/.env` file with the following content:
```
DATABASE_URL=
PORT=

CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

GEMINI_API_KEY=

CLIPDROP_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

**Note:**  
Replace the example values with your actual credentials and secrets.

4. **Start the backend server:**
   ```
   cd server
   npm start
   ```

5. **Start the client development server:**
   ```
   cd ../client
   npm run dev
   ```

## Technologies Used

- React
- Vite
- Clerk (authentication)
- Node.js
- Express
- Tailwind CSS
- PostgreSQL
- Cloudinary
- Google Gemini API
- ClipDrop API

## Usage

Sign in to access AI tools for content creation and productivity. Use the sidebar to navigate between features.

## License

This project is licensed under the MIT License.
