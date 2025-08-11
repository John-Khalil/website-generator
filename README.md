# 🚀 Website Generator - AI-First Full-Stack Project

A modern full-stack web application that generates website landing pages from user ideas using AI. Built with Next.js 14, NestJS, and MongoDB.

## ✨ Features

- **AI-Powered Generation**: Transform website ideas into complete landing pages
- **Modern Tech Stack**: Next.js 14 (App Router), NestJS, MongoDB, TypeScript
- **Beautiful UI**: Tailwind CSS with responsive design
- **Real-time Preview**: See generated content immediately
- **Database Storage**: MongoDB Atlas integration for data persistence

## 🏗️ Architecture

```
website-generator/
├── frontend/          # Next.js 14 application
├── backend/           # NestJS API server
├── README.md          # This file
└── package.json       # Root package with scripts
```

### Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: NestJS, TypeScript, Mongoose (MongoDB ODM)
- **Database**: MongoDB Atlas
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **pnpm**: Version 8.0.0 or higher
- **MongoDB Atlas Account**: Free tier available

### 1. Clone the Repository

```bash
git clone https://github.com/John-Khalil/website-generator.git
cd website-generator
```

### 2. Install Dependencies

```bash
pnpm install:all
```

This will install dependencies for both frontend and backend.

### 3. Set Up MongoDB Atlas

#### Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new project

#### Step 2: Create Database Cluster

1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select your preferred cloud provider and region
4. Click "Create"

#### Step 3: Set Up Database Access

1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Set username: `WebsiteGenerator`
5. Set password: `WebsiteGenerator` (or your preferred password)
6. Select "Read and write to any database"
7. Click "Add User"

#### Step 4: Set Up Network Access

1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

#### Step 5: Get Connection String

1. Go to "Database" in the left sidebar
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string

### 4. Configure Environment Variables

#### Backend Configuration

Create a `.env` file in the `backend/` folder:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://WebsiteGenerator:WebsiteGenerator@cluster0.xxxxx.mongodb.net/website-generator?retryWrites=true&w=majority&appName=Cluster0

# Backend Port (optional, defaults to 3001)
PORT=3001
```

**Important**: Replace the connection string with your actual MongoDB Atlas connection string from Step 3.

### 5. Start the Application

#### Option A: Start Both Services (Recommended)

```bash
pnpm run dev:all
```

This starts both frontend and backend concurrently.

#### Option B: Start Services Separately

```bash
# Terminal 1 - Backend
pnpm run dev:backend

# Terminal 2 - Frontend
pnpm run dev:frontend
```

### 6. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## 📱 How to Use

1. **Enter Your Website Idea**: Type a description like "Landing page for a bakery"
2. **Submit**: Click "Generate Website" to send your idea to the AI
3. **Preview**: View the generated landing page with 3 sections:
   - Hero Section
   - About Section
   - Contact Section
4. **Generate New**: Click "Generate New Idea" to start over

## 🔧 Development

### Available Scripts

```bash
# Root level commands
pnpm run dev:all          # Start both frontend and backend
pnpm run dev:frontend     # Start only frontend
pnpm run dev:backend      # Start only backend
pnpm run install:all      # Install dependencies for both
pnpm run build:all        # Build both applications
pnpm run lint:all         # Run ESLint on both
pnpm run format:all       # Run Prettier on both

# Frontend specific
cd frontend
pnpm run dev              # Start development server
pnpm run build            # Build for production
pnpm run lint             # Run ESLint
pnpm run format           # Run Prettier

# Backend specific
cd backend
pnpm run start:dev        # Start development server
pnpm run build            # Build for production
pnpm run start:prod       # Start production server
pnpm run lint             # Run ESLint
pnpm run format           # Run Prettier
```

### Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Global styles with Tailwind
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main page component
│   ├── components/       # React components
│   │   ├── WebsiteForm.tsx
│   │   └── LandingPagePreview.tsx
│   └── types/            # TypeScript type definitions
├── package.json
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── .eslintrc.json        # ESLint configuration

backend/
├── src/
│   ├── main.ts           # Application entry point
│   ├── app.module.ts     # Root module
│   └── ideas/            # Ideas feature module
│       ├── ideas.module.ts
│       ├── ideas.controller.ts
│       ├── ideas.service.ts
│       ├── dto/          # Data Transfer Objects
│       └── schemas/      # Mongoose schemas
├── package.json
├── tsconfig.json         # TypeScript configuration
└── .eslintrc.js          # ESLint configuration
```

## 🗄️ Database Schema

### Ideas Collection

```typescript
interface Idea {
  _id: ObjectId;
  idea: string; // User's website idea
  sections: Section[]; // Generated sections
  createdAt: Date; // Creation timestamp (indexed)
}

interface Section {
  title: string; // Section title
  content: string; // Section content
}
```

### MongoDB Indexes

- `createdAt`: -1 (descending) for efficient querying

## 🔌 API Endpoints

### POST /ideas

Creates a new website idea and generates sections.

**Request Body:**

```json
{
  "idea": "Landing page for a bakery"
}
```

**Response:**

```json
{
  "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
  "idea": "Landing page for a bakery",
  "sections": [
    {
      "title": "Hero Section",
      "content": "Welcome to our amazing bakery..."
    },
    {
      "title": "About Section",
      "content": "Learn more about what makes us special..."
    },
    {
      "title": "Contact Section",
      "content": "Ready to get started? Reach out to us..."
    }
  ],
  "createdAt": "2025-08-11T02:36:22.123Z"
}
```

### GET /ideas/:id

Retrieves a stored idea by ID.

**Response:** Same as POST response above.

## 🎨 Customization

### Styling

- All styles use Tailwind CSS classes
- Custom component classes defined in `frontend/src/app/globals.css`
- No inline styles - maintainable and consistent

### AI Generation

- Current implementation uses placeholder content
- Easy to integrate with real AI services (OpenAI, Anthropic, etc.)
- Modify `generateSections()` method in `IdeasService`

## 🚀 Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set build command: `cd frontend && pnpm build`
3. Set output directory: `frontend/.next`
4. Deploy

### Backend (Railway/Render)

1. Set environment variables (MONGODB_URI, PORT)
2. Set build command: `cd backend && pnpm build`
3. Set start command: `cd backend && pnpm start:prod`
4. Deploy

### Environment Variables for Production

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/website-generator?retryWrites=true&w=majority
PORT=3001
NODE_ENV=production
```

## 🧪 Testing

### Manual Testing

1. Start both services: `pnpm run dev:all`
2. Open http://localhost:3000
3. Submit a website idea
4. Verify sections are generated and displayed
5. Check MongoDB Atlas for stored data

### API Testing

```bash
# Test idea creation
curl -X POST http://localhost:3001/ideas \
  -H "Content-Type: application/json" \
  -d '{"idea": "Test website idea"}'

# Test idea retrieval (replace ID from previous response)
curl http://localhost:3001/ideas/64f1a2b3c4d5e6f7g8h9i0j1
```

## 🔒 Security Considerations

- **CORS**: Configured for localhost:3000 (frontend)
- **Input Validation**: DTO validation with class-validator
- **Environment Variables**: Never commit .env files
- **MongoDB**: Use connection string authentication

## 🚧 Future Enhancements

- [ ] Real AI integration (OpenAI, Anthropic)
- [ ] User authentication and idea history
- [ ] Customizable templates and themes
- [ ] Export to static HTML/CSS
- [ ] Image generation for sections
- [ ] Analytics and performance metrics
- [ ] Admin dashboard for content management
- [ ] API rate limiting and caching
- [ ] Unit and integration tests
- [ ] Docker containerization
