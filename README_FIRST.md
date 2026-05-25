# MEDICARE PROJECT - CLOUD READY

This zip contains the full Medicare project (Frontend, Backend, Admin).

## Prerequisites
- Node.js installed
- MongoDB Atlas (Cloud) URI in `backend/.env`
- Clerk keys in all `.env` files

## How to Run

### 1. Backend
- Go to `backend` folder
- Run `npm install`
- Run `npm run dev` (starts on port 4000)

### 2. Admin Panel
- Go to `admin` folder
- Run `npm install`
- Run `npm run dev` (starts on port 5174/5175)

### 3. Frontend
- Go to `frontend` folder
- Run `npm install`
- Run `npm run dev` (starts on port 5173)

## Environment Variables
Ensure the following are set in your `.env` files:
- `MONGODB_URI`
- `CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `AAMARPAY_STORE_ID`
- `AAMARPAY_SIGNATURE_KEY`
- `VITE_API_URL` (in frontend/admin)
