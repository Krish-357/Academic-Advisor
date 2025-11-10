# Personalized Academic & Career Guidance - Agentic AI (Final)

This repo contains a React frontend (Vite + Tailwind) and a FastAPI backend.

## Local dev

### Backend
```
cd server
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
export GEMINI_API_KEY=YOUR_KEY
uvicorn app.main:app --reload --port 8000
```

### Frontend
```
cd elevatemy-path-main
npm install
# to run dev server
npm run dev
# to build
npm run build
```

## Deploy
- Frontend -> Vercel (set VITE_API_URL to your backend URL)
- Backend -> Render (set GEMINI_API_KEY in env vars)

Or use docker-compose at root (requires Docker):
```
docker compose up --build
```
